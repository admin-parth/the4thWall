# Dead Code Cleanup Script - Usage Guide

## Quick Start

```bash
# Make the script executable (already done)
chmod +x cleanup-dead-code.sh

# Run the cleanup script
./cleanup-dead-code.sh
```

## What the Script Does

The script performs a **safe, incremental cleanup** of all identified dead code in 4 priority levels:

### Priority 1: Remove Unused Layouts (9 files)
- Removes all layouts except `layout2.vue`
- Files removed:
  - layout1.vue, layout3.vue, layout4.vue, layout5.vue, layout6.vue
  - layout8.vue, layout10.vue, layout11.vue, layout12.vue

### Priority 2: Remove Demo Pages (14 files)
- Removes entire `pages/page/` directory
- Contains unused demo/module pages

### Priority 3: Remove Unused Element Components (~30 files)
- Unused testimonial variations (4 files)
- Unused listing variations (listing4/*, listing10.vue)
- Unused filter options (6 files)
- Unused feature property variations (2 files)
- Other unused elements (customizer, dropdownfilter, etc.)

### Priority 4: Remove Alternative Home Page (1 file)
- Removes `pages/home/` directory if it exists

## Safety Features

✅ **Automatic Backups**
- Creates a backup branch before starting
- Creates a cleanup branch for all changes
- Each priority level is committed separately

✅ **User Prompts**
- Pauses after each priority level
- Allows you to test the application
- You can cancel at any time

✅ **Detailed Logging**
- Creates timestamped log file
- Tracks all changes
- Shows before/after statistics

✅ **Git Integration**
- All changes are committed incrementally
- Easy to rollback if needed
- Clear commit messages

## Expected Results

**Before Cleanup:**
- Components: 304 files
- Pages: 28 files
- Layouts: 10 files

**After Cleanup:**
- Components: ~270 files (34 removed)
- Pages: ~14 files (14 removed)
- Layouts: 1 file (9 removed)

**Total Removed:** ~57 files

## Usage Instructions

### Step 1: Run the Script
```bash
./cleanup-dead-code.sh
```

### Step 2: Follow the Prompts
The script will:
1. Check your git status
2. Create backup branches
3. Remove Priority 1 files (layouts)
4. **PAUSE** - Test your app with `npm run dev`
5. Remove Priority 2 files (demo pages)
6. **PAUSE** - Test your app again
7. Remove Priority 3 files (element components)
8. **PAUSE** - Test your app again
9. Remove Priority 4 files (alternative home)
10. Show final statistics

### Step 3: Test After Each Priority
At each pause, test your application:
```bash
# In a separate terminal
npm run dev

# Open browser and test:
# - Home page
# - Main pages
# - About page
# - Contact page
# - All navigation
```

If everything works, press `y` to continue.
If something breaks, press `n` to stop.

### Step 4: Merge or Rollback

**If everything works:**
```bash
git checkout main
git merge cleanup-dead-code-TIMESTAMP
git push
```

**If there are issues:**
```bash
git checkout backup-cleanup-TIMESTAMP
# Or restore specific files:
git checkout backup-cleanup-TIMESTAMP -- path/to/file
```

## What to Test

After each priority level, verify:

✅ **Home Page**
- Loads correctly
- All sections display
- No console errors

✅ **Navigation**
- All menu items work
- Page transitions smooth
- No 404 errors

✅ **Main Pages**
- All 10 main pages load
- Components render correctly
- Images/assets load

✅ **About & Contact**
- Pages display correctly
- Forms work (if any)
- No missing components

✅ **Browser Console**
- No component errors
- No 404s for missing files
- No import errors

## Rollback Instructions

### Rollback Everything
```bash
# Switch to backup branch
git checkout backup-cleanup-TIMESTAMP

# Or reset to before cleanup
git reset --hard HEAD~4  # Undo last 4 commits
```

### Rollback Specific Priority
```bash
# Undo last commit (Priority 4)
git reset --hard HEAD~1

# Undo last 2 commits (Priority 3 & 4)
git reset --hard HEAD~2

# Undo last 3 commits (Priority 2, 3 & 4)
git reset --hard HEAD~3
```

### Restore Specific Files
```bash
# Restore a specific file
git checkout HEAD~1 -- path/to/file

# Restore from backup branch
git checkout backup-cleanup-TIMESTAMP -- path/to/file
```

## Log File

The script creates a detailed log file:
```
cleanup-log-YYYYMMDD-HHMMSS.txt
```

This log contains:
- Timestamp for each action
- Files removed
- Git commits
- Before/after statistics
- Any errors or warnings

## Troubleshooting

### Script Won't Run
```bash
# Make sure it's executable
chmod +x cleanup-dead-code.sh

# Run with bash explicitly
bash cleanup-dead-code.sh
```

### Build Fails After Cleanup
```bash
# Check the error message
npm run build

# Rollback the last priority
git reset --hard HEAD~1

# Check what was removed
git log --oneline
git show HEAD
```

### Missing Component Error
```bash
# Find which component is missing
# Check browser console or build output

# Restore the component
git checkout HEAD~1 -- components/path/to/component.vue

# Or restore entire directory
git checkout HEAD~1 -- components/element/
```

## Manual Cleanup (Alternative)

If you prefer to do it manually, here are the commands:

```bash
# Priority 1: Layouts
rm -f components/layout/layouts/layout{1,3,4,5,6,8,10,11,12}.vue

# Priority 2: Demo pages
rm -rf pages/page

# Priority 3: Element components
rm -rf components/element/listing/listing4
rm -f components/element/listing/listing10.vue
rm -f components/element/happy_clinet/testimonial{1,2,4,_3}.vue
rm -rf components/element/filteroption
rm -f components/element/featureproperty/property{4,7}.vue
rm -f components/element/{customizer,dropdownfilter}.vue
rm -rf components/element/emptydata

# Priority 4: Alternative home
rm -rf pages/home

# Commit
git add -A
git commit -m "Remove dead code"
```

## Best Practices

1. ✅ **Commit your work** before running the script
2. ✅ **Test thoroughly** after each priority level
3. ✅ **Keep the backup branch** until you're confident
4. ✅ **Review the log file** to see what was removed
5. ✅ **Run in development** first, not production
6. ✅ **Have a rollback plan** ready

## Support

If you encounter issues:

1. Check the log file for details
2. Review the git commits to see what changed
3. Use git to rollback if needed
4. Test in a separate branch first
5. Keep the backup branch until confident

## Summary

This script safely removes **~57 files** of dead code:
- 9 unused layouts
- 14 demo pages  
- ~30 unused element components
- 1 alternative home page

All changes are:
- ✅ Backed up automatically
- ✅ Committed incrementally
- ✅ Tested at each step
- ✅ Reversible with git

**Total cleanup time:** ~10-15 minutes (including testing)
