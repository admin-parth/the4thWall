# Dead Code Removal Checklist

This file contains a prioritized list of files and directories that can be safely removed from the project.

## ⚠️ IMPORTANT: Before Deletion

1. **Create a backup branch:**
   ```bash
   git checkout -b backup-before-cleanup
   git push origin backup-before-cleanup
   ```

2. **Create a new cleanup branch:**
   ```bash
   git checkout -b cleanup-dead-code
   ```

3. **Test after each major section removal:**
   ```bash
   npm run dev
   # Test all active features
   ```

---

## Priority 1: Unused Home Page Variations (HIGH IMPACT)

### Remove Alternative Home Pages
Delete these entire directories:

```bash
# Remove unused home page variations
rm -rf pages/home/classic
rm -rf pages/home/enterprise
rm -rf pages/home/filter_slider
rm -rf pages/home/horizontal_search
rm -rf pages/home/imagecontent
rm -rf pages/home/modern
rm -rf pages/home/modern_video
rm -rf pages/home/parallaximage
rm -rf pages/home/searchtab
rm -rf pages/home/typedimage
rm -rf pages/home/vertical_search
rm -rf pages/home/corporate  # Only if not using this variation

# Remove corresponding component directories
rm -rf components/home/classic
rm -rf components/home/enterprise
rm -rf components/home/horizontal_search
rm -rf components/home/vertical_search
rm -rf components/home/searchtab
rm -rf components/home/modernvideo
rm -rf components/home/parallax_image
rm -rf components/home/typedimage
# Keep: components/home/corporate (if using the4th_wall page)
```

**Impact:** ~200 files removed

---

## Priority 2: Unused Feature Pages (HIGH IMPACT)

### Remove Listing Pages
```bash
# Remove all listing pages and components
rm -rf pages/listing
rm -rf components/listing
```

**Impact:** ~90 files removed

### Remove Property Detail Variations
```bash
# Remove all single property variations (keep one if needed)
rm -rf pages/property/single-property-1
rm -rf pages/property/single-property-2
rm -rf pages/property/single-property-3
rm -rf pages/property/single-property-4
rm -rf pages/property/single-property-5
rm -rf pages/property/single-property-6
rm -rf pages/property/single-property-7
rm -rf pages/property/single-property-8
rm -rf pages/property/single-property-9
rm -rf pages/property/single-property-10

# Remove corresponding components
rm -rf components/property/single1
rm -rf components/property/single2
rm -rf components/property/single3
rm -rf components/property/single4
rm -rf components/property/single5
rm -rf components/property/single6
rm -rf components/property/single7
rm -rf components/property/single8
rm -rf components/property/single9
rm -rf components/property/single10
```

**Impact:** ~130 files removed

### Remove Agent Pages
```bash
# Remove agent pages and components
rm -rf pages/agent
rm -rf components/agent
```

**Impact:** ~22 files removed

---

## Priority 3: Demo/Module Pages (MEDIUM IMPACT)

### Remove Module Demo Pages
```bash
# Remove module demonstration pages
rm -rf pages/modules
```

**Impact:** 14 files removed

### Remove Page Demos
```bash
# Blog pages (if not using blog functionality)
rm -rf pages/page/blog_page
rm -rf pages/page/blog_details
rm -rf components/page/blogpage
rm -rf components/page/blog_details

# Portfolio pages (if not using portfolio)
rm -rf pages/page/portfolio
rm -rf components/page/portfolio

# User panel (if not using user dashboard)
rm -rf pages/page/user-panel
rm -rf components/page/user-panel

# Agency pages (if not using agency features)
rm -rf pages/page/agency
rm -rf components/page/agency

# Breadcrumb variations (keep one if needed)
rm -rf pages/page/breadcrumb
rm -rf components/element/bradcrumb

# Other pages (review before deleting)
rm -rf pages/page/otherpages/coming-soon1.vue
rm -rf pages/page/otherpages/coming-soon2.vue
rm -rf pages/page/otherpages/coming-soon3.vue
rm -rf components/page/otherpages/coming-soon
```

**Impact:** ~250 files removed

---

## Priority 4: Unused Element Components (MEDIUM IMPACT)

### Remove Unused Element Variations
```bash
# Agent element variations (if not used)
rm -f components/element/agent/agent1.vue
rm -f components/element/agent/agent2.vue
rm -f components/element/agent/agent4.vue
rm -f components/element/agent/agent5.vue

# Banner variations (keep what you need)
rm -f components/element/banners/banner1.vue
rm -f components/element/banners/banner3.vue

# Blog elements (if not using blog)
rm -rf components/element/blog
rm -rf components/element/blog_details
rm -rf components/element/blogpage

# Other unused elements
rm -rf components/element/brands  # If not using brand section
rm -rf components/element/cities  # If not using cities section
rm -rf components/element/features  # Review before deleting
rm -rf components/element/services  # Review before deleting
```

**Impact:** ~100 files removed

---

## Priority 5: Contact Page Variations (LOW IMPACT)

```bash
# Remove unused contact page variations (keep one)
rm -f pages/contact/contact-1.vue
rm -f pages/contact/contact-2.vue
rm -f pages/contact/contact-3.vue
rm -rf components/contact/contact1
rm -rf components/contact/contact2
rm -rf components/contact/contact3
```

**Impact:** ~10 files removed

---

## Priority 6: Unused Store Modules (LOW IMPACT)

```bash
# Remove unused store module
rm -f store/propertysale.ts
```

**Impact:** 1 file removed

---

## Priority 7: Unused Layouts (LOW IMPACT)

```bash
# Remove unused layout components
rm -f components/layout/layouts/layout7.vue
rm -f components/layout/layouts/layout9.vue
```

**Impact:** 2 files removed

---

## Files to Review Before Deleting

These files might be used dynamically or in ways not detected by static analysis:

### Main Components (Review Usage)
- `components/main/*` - Check if all are used in pages/main/*

### Element Components (Review Usage)
- `components/element/taptop/*` - Scroll-to-top functionality
- `components/element/footer/*` - Footer variations
- `components/element/header/*` - Header variations

### Layout Components (Keep Active Ones)
- `components/layout/layouts/layout1.vue` - Used 2 times
- `components/layout/layouts/layout2.vue` - Used 22 times ✅ PRIMARY
- `components/layout/layouts/layout3.vue` - Used 2 times
- `components/layout/layouts/layout4.vue` - Used 2 times
- `components/layout/layouts/layout5.vue` - Used 2 times
- `components/layout/layouts/layout6.vue` - Used 2 times
- `components/layout/layouts/layout8.vue` - Used 2 times
- `components/layout/layouts/layout10.vue` - Used 2 times
- `components/layout/layouts/layout11.vue` - Used 2 times
- `components/layout/layouts/layout12.vue` - Used 2 times

---

## Automated Cleanup Script

Create and run this script to remove all Priority 1-3 items:

```bash
#!/bin/bash

# Save as: cleanup-dead-code.sh
# Usage: chmod +x cleanup-dead-code.sh && ./cleanup-dead-code.sh

echo "Starting dead code cleanup..."

# Priority 1: Home variations
echo "Removing unused home page variations..."
rm -rf pages/home/classic
rm -rf pages/home/enterprise
rm -rf pages/home/filter_slider
rm -rf pages/home/horizontal_search
rm -rf pages/home/imagecontent
rm -rf pages/home/modern
rm -rf pages/home/modern_video
rm -rf pages/home/parallaximage
rm -rf pages/home/searchtab
rm -rf pages/home/typedimage
rm -rf pages/home/vertical_search

rm -rf components/home/classic
rm -rf components/home/enterprise
rm -rf components/home/horizontal_search
rm -rf components/home/vertical_search
rm -rf components/home/searchtab
rm -rf components/home/modernvideo
rm -rf components/home/parallax_image
rm -rf components/home/typedimage

# Priority 2: Feature pages
echo "Removing unused feature pages..."
rm -rf pages/listing
rm -rf components/listing

rm -rf pages/property/single-property-*
rm -rf components/property/single*

rm -rf pages/agent
rm -rf components/agent

# Priority 3: Demo pages
echo "Removing demo pages..."
rm -rf pages/modules
rm -rf pages/page/blog_page
rm -rf pages/page/blog_details
rm -rf pages/page/portfolio
rm -rf pages/page/user-panel
rm -rf pages/page/agency
rm -rf pages/page/breadcrumb

rm -rf components/page/blogpage
rm -rf components/page/blog_details
rm -rf components/page/portfolio
rm -rf components/page/user-panel
rm -rf components/page/agency

# Priority 6: Store
echo "Removing unused store..."
rm -f store/propertysale.ts

# Priority 7: Layouts
echo "Removing unused layouts..."
rm -f components/layout/layouts/layout7.vue
rm -f components/layout/layouts/layout9.vue

echo "Cleanup complete!"
echo "Please run 'npm run dev' to test the application."
```

---

## Verification Steps

After each deletion:

1. **Check for build errors:**
   ```bash
   npm run build
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Test all active pages:**
   - Home page
   - Main pages
   - Contact page
   - About page
   - Any other active features

4. **Check console for errors:**
   - Open browser DevTools
   - Look for 404s or component not found errors

5. **Commit changes:**
   ```bash
   git add .
   git commit -m "Remove dead code: [describe what was removed]"
   ```

---

## Rollback Instructions

If something breaks:

```bash
# Rollback last commit
git reset --hard HEAD~1

# Or checkout specific files from backup
git checkout backup-before-cleanup -- path/to/file
```

---

## Expected Results

After complete cleanup:

- **Files removed:** ~620 files (81% reduction)
- **Build time:** Significantly faster
- **Bundle size:** Smaller
- **Codebase clarity:** Much improved
- **Maintenance:** Easier

---

*Review each section carefully before deletion. When in doubt, keep the file and mark it for future review.*
