#!/bin/bash

################################################################################
# Dead Code Cleanup Script
# Project: the4thWall
# Generated: November 25, 2025
#
# This script removes all identified dead code in a safe, incremental manner.
# It creates backups and allows testing after each major step.
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root
PROJECT_ROOT="/Users/parthchauhan/Projects/the4thWall"
cd "$PROJECT_ROOT"

# Log file
LOG_FILE="cleanup-log-$(date +%Y%m%d-%H%M%S).txt"

# Function to log messages
log() {
    echo -e "${GREEN}[$(date +%H:%M:%S)]${NC} $1" | tee -a "$LOG_FILE"
}

log_warning() {
    echo -e "${YELLOW}[$(date +%H:%M:%S)] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

log_error() {
    echo -e "${RED}[$(date +%H:%M:%S)] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

log_section() {
    echo -e "\n${BLUE}========================================${NC}" | tee -a "$LOG_FILE"
    echo -e "${BLUE}$1${NC}" | tee -a "$LOG_FILE"
    echo -e "${BLUE}========================================${NC}\n" | tee -a "$LOG_FILE"
}

# Function to count files
count_files() {
    local dir=$1
    if [ -d "$dir" ]; then
        find "$dir" -type f | wc -l | tr -d ' '
    else
        echo "0"
    fi
}

# Function to prompt user
prompt_continue() {
    local message=$1
    echo -e "\n${YELLOW}$message${NC}"
    read -p "Continue? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_warning "User cancelled operation"
        exit 1
    fi
}

# Function to create backup
create_backup() {
    local backup_name=$1
    log "Creating backup: $backup_name"
    git add -A
    git stash push -m "$backup_name" || true
    git stash apply || true
}

# Function to test build
test_build() {
    log "Testing build..."
    if npm run build 2>&1 | tee -a "$LOG_FILE"; then
        log "✓ Build successful"
        return 0
    else
        log_error "✗ Build failed"
        return 1
    fi
}

################################################################################
# MAIN SCRIPT
################################################################################

log_section "DEAD CODE CLEANUP SCRIPT"
log "Project: the4thWall"
log "Log file: $LOG_FILE"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    log_error "Not in a git repository. Please run from project root."
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    log_warning "You have uncommitted changes."
    prompt_continue "It's recommended to commit or stash changes before cleanup."
fi

# Display current state
log_section "CURRENT STATE"
COMPONENT_COUNT=$(count_files "components")
PAGE_COUNT=$(count_files "pages")
STORE_COUNT=$(count_files "store")
LAYOUT_COUNT=$(count_files "components/layout/layouts")

log "Components: $COMPONENT_COUNT files"
log "Pages: $PAGE_COUNT files"
log "Store modules: $STORE_COUNT files"
log "Layouts: $LAYOUT_COUNT files"

# Create backup branch
log_section "STEP 0: CREATE BACKUP BRANCH"
BACKUP_BRANCH="backup-cleanup-$(date +%Y%m%d-%H%M%S)"
log "Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH" 2>&1 | tee -a "$LOG_FILE"
git checkout - 2>&1 | tee -a "$LOG_FILE"
log "✓ Backup branch created: $BACKUP_BRANCH"
log "  You can restore with: git checkout $BACKUP_BRANCH"

# Create cleanup branch
CLEANUP_BRANCH="cleanup-dead-code-$(date +%Y%m%d-%H%M%S)"
log "Creating cleanup branch: $CLEANUP_BRANCH"
git checkout -b "$CLEANUP_BRANCH" 2>&1 | tee -a "$LOG_FILE"
log "✓ Working on branch: $CLEANUP_BRANCH"

################################################################################
# PRIORITY 1: REMOVE UNUSED LAYOUTS
################################################################################

log_section "PRIORITY 1: REMOVE UNUSED LAYOUTS"
log "Removing 9 unused layout files (keeping only layout2.vue)"

LAYOUTS_TO_REMOVE=(
    "components/layout/layouts/layout1.vue"
    "components/layout/layouts/layout3.vue"
    "components/layout/layouts/layout4.vue"
    "components/layout/layouts/layout5.vue"
    "components/layout/layouts/layout6.vue"
    "components/layout/layouts/layout8.vue"
    "components/layout/layouts/layout10.vue"
    "components/layout/layouts/layout11.vue"
    "components/layout/layouts/layout12.vue"
)

REMOVED_COUNT=0
for layout in "${LAYOUTS_TO_REMOVE[@]}"; do
    if [ -f "$layout" ]; then
        log "Removing: $layout"
        rm -f "$layout"
        REMOVED_COUNT=$((REMOVED_COUNT + 1))
    else
        log_warning "File not found: $layout"
    fi
done

log "✓ Removed $REMOVED_COUNT layout files"

# Commit
git add -A
git commit -m "Remove unused layouts (Priority 1)" 2>&1 | tee -a "$LOG_FILE"

prompt_continue "Priority 1 complete. Test the application before continuing."

################################################################################
# PRIORITY 2: REMOVE DEMO PAGES
################################################################################

log_section "PRIORITY 2: REMOVE DEMO PAGES"
log "Removing pages/page/* directory (14 demo pages)"

if [ -d "pages/page" ]; then
    PAGE_FILES=$(count_files "pages/page")
    log "Found $PAGE_FILES files in pages/page/"
    rm -rf pages/page
    log "✓ Removed pages/page/ directory"
else
    log_warning "Directory not found: pages/page/"
fi

# Commit
git add -A
git commit -m "Remove demo pages (Priority 2)" 2>&1 | tee -a "$LOG_FILE"

prompt_continue "Priority 2 complete. Test the application before continuing."

################################################################################
# PRIORITY 3: REMOVE UNUSED ELEMENT COMPONENTS
################################################################################

log_section "PRIORITY 3: REMOVE UNUSED ELEMENT COMPONENTS"
log "Removing unused element component variations"

# Unused testimonial variations
TESTIMONIALS_TO_REMOVE=(
    "components/element/happy_clinet/testimonial1.vue"
    "components/element/happy_clinet/testimonial2.vue"
    "components/element/happy_clinet/testimonial4.vue"
    "components/element/happy_clinet/testimonial_3.vue"
)

log "Removing unused testimonial variations..."
for file in "${TESTIMONIALS_TO_REMOVE[@]}"; do
    if [ -f "$file" ]; then
        log "Removing: $file"
        rm -f "$file"
    fi
done

# Unused listing variations
if [ -d "components/element/listing/listing4" ]; then
    log "Removing: components/element/listing/listing4/"
    rm -rf components/element/listing/listing4
fi

if [ -f "components/element/listing/listing10.vue" ]; then
    log "Removing: components/element/listing/listing10.vue"
    rm -f components/element/listing/listing10.vue
fi

# Unused filter options
FILTER_OPTIONS_TO_REMOVE=(
    "components/element/filteroption/city.vue"
    "components/element/filteroption/country.vue"
    "components/element/filteroption/filtercities.vue"
    "components/element/filteroption/filtercountry.vue"
    "components/element/filteroption/filtertype.vue"
    "components/element/filteroption/index.vue"
)

log "Removing unused filter options..."
for file in "${FILTER_OPTIONS_TO_REMOVE[@]}"; do
    if [ -f "$file" ]; then
        log "Removing: $file"
        rm -f "$file"
    fi
done

# Remove entire filteroption directory if empty
if [ -d "components/element/filteroption" ]; then
    if [ -z "$(ls -A components/element/filteroption)" ]; then
        log "Removing empty directory: components/element/filteroption/"
        rm -rf components/element/filteroption
    fi
fi

# Unused feature property variations
FEATURE_PROPS_TO_REMOVE=(
    "components/element/featureproperty/property4.vue"
    "components/element/featureproperty/property7.vue"
)

log "Removing unused feature property variations..."
for file in "${FEATURE_PROPS_TO_REMOVE[@]}"; do
    if [ -f "$file" ]; then
        log "Removing: $file"
        rm -f "$file"
    fi
done

# Other unused elements
OTHER_ELEMENTS_TO_REMOVE=(
    "components/element/customizer.vue"
    "components/element/dropdownfilter.vue"
    "components/element/emptydata/emptycomper.vue"
)

log "Removing other unused elements..."
for file in "${OTHER_ELEMENTS_TO_REMOVE[@]}"; do
    if [ -f "$file" ]; then
        log "Removing: $file"
        rm -f "$file"
    fi
done

# Remove emptydata directory if empty
if [ -d "components/element/emptydata" ]; then
    if [ -z "$(ls -A components/element/emptydata)" ]; then
        log "Removing empty directory: components/element/emptydata/"
        rm -rf components/element/emptydata
    fi
fi

log "✓ Removed unused element components"

# Commit
git add -A
git commit -m "Remove unused element components (Priority 3)" 2>&1 | tee -a "$LOG_FILE"

prompt_continue "Priority 3 complete. Test the application before continuing."

################################################################################
# PRIORITY 4: REMOVE ALTERNATIVE HOME PAGE
################################################################################

log_section "PRIORITY 4: REMOVE ALTERNATIVE HOME PAGE"
log "Removing pages/home/* if it exists"

if [ -d "pages/home" ]; then
    HOME_FILES=$(count_files "pages/home")
    log "Found $HOME_FILES files in pages/home/"
    rm -rf pages/home
    log "✓ Removed pages/home/ directory"
else
    log_warning "Directory not found: pages/home/"
fi

# Commit
git add -A
git commit -m "Remove alternative home page (Priority 4)" 2>&1 | tee -a "$LOG_FILE"

################################################################################
# FINAL STATE
################################################################################

log_section "CLEANUP COMPLETE"

FINAL_COMPONENT_COUNT=$(count_files "components")
FINAL_PAGE_COUNT=$(count_files "pages")
FINAL_LAYOUT_COUNT=$(count_files "components/layout/layouts")

log "BEFORE:"
log "  Components: $COMPONENT_COUNT files"
log "  Pages: $PAGE_COUNT files"
log "  Layouts: $LAYOUT_COUNT files"
log ""
log "AFTER:"
log "  Components: $FINAL_COMPONENT_COUNT files"
log "  Pages: $FINAL_PAGE_COUNT files"
log "  Layouts: $FINAL_LAYOUT_COUNT files"
log ""
log "REMOVED:"
log "  Components: $((COMPONENT_COUNT - FINAL_COMPONENT_COUNT)) files"
log "  Pages: $((PAGE_COUNT - FINAL_PAGE_COUNT)) files"
log "  Layouts: $((LAYOUT_COUNT - FINAL_LAYOUT_COUNT)) files"

################################################################################
# FINAL STEPS
################################################################################

log_section "FINAL STEPS"
log "1. Test the application thoroughly:"
log "   npm run dev"
log ""
log "2. If everything works, merge the cleanup branch:"
log "   git checkout main"
log "   git merge $CLEANUP_BRANCH"
log ""
log "3. If there are issues, rollback:"
log "   git checkout $BACKUP_BRANCH"
log ""
log "4. View all changes:"
log "   git log --oneline"
log ""
log "Cleanup log saved to: $LOG_FILE"
log ""
log_section "✓ CLEANUP SCRIPT COMPLETED SUCCESSFULLY"

echo -e "\n${GREEN}All done! Please test your application.${NC}\n"
