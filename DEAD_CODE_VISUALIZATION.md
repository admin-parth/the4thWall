# Dead Code Visualization

## Component Usage Overview

```mermaid
pie title Component Usage Distribution
    "Used Components (102)" : 102
    "Unused Components (511)" : 511
```

## Page Usage Overview

```mermaid
pie title Page Usage Distribution
    "Used Pages (38)" : 38
    "Unused Pages (112)" : 112
```

## Cleanup Impact by Priority

```mermaid
graph TD
    A[Total: 620 Dead Files] --> B[Priority 1: Home Variations]
    A --> C[Priority 2: Feature Pages]
    A --> D[Priority 3: Demo Pages]
    A --> E[Priority 4: Misc]
    
    B --> B1[~200 files]
    C --> C1[~240 files]
    D --> D1[~150 files]
    E --> E1[~30 files]
    
    style B fill:#ff6b6b
    style C fill:#ffa500
    style D fill:#ffd93d
    style E fill:#6bcf7f
```

## File Structure - Before vs After Cleanup

```mermaid
graph LR
    subgraph "Before Cleanup"
        A1[Components: 613]
        A2[Pages: 150]
        A3[Total: 763]
    end
    
    subgraph "After Cleanup"
        B1[Components: ~102]
        B2[Pages: ~38]
        B3[Total: ~140]
    end
    
    A3 -->|Remove 81%| B3
    
    style A3 fill:#ff6b6b
    style B3 fill:#6bcf7f
```

## Unused Components by Category

```mermaid
graph TD
    Root[Unused Components: 511] --> Home[Home Variations: 180]
    Root --> Page[Page Components: 150]
    Root --> Listing[Listing: 62]
    Root --> Property[Property: 61]
    Root --> Element[Element: 30]
    Root --> Agent[Agent: 18]
    Root --> Contact[Contact: 10]
    
    style Root fill:#ff6b6b
    style Home fill:#ffa500
    style Page fill:#ffa500
    style Listing fill:#ffd93d
    style Property fill:#ffd93d
```

## Active vs Inactive Pages

```mermaid
graph TD
    subgraph "Active Pages ✅"
        AP1[index.vue]
        AP2[main/* - 10 files]
        AP3[home/the4th_wall]
    end
    
    subgraph "Inactive Pages ❌"
        IP1[12 Home Variations]
        IP2[28 Listing Pages]
        IP3[12 Property Pages]
        IP4[63 Demo Pages]
        IP5[Others]
    end
    
    style AP1 fill:#6bcf7f
    style AP2 fill:#6bcf7f
    style AP3 fill:#6bcf7f
    
    style IP1 fill:#ff6b6b
    style IP2 fill:#ff6b6b
    style IP3 fill:#ff6b6b
    style IP4 fill:#ff6b6b
    style IP5 fill:#ff6b6b
```

## Cleanup Workflow

```mermaid
flowchart TD
    Start([Start Cleanup]) --> Backup[Create Backup Branch]
    Backup --> Branch[Create Cleanup Branch]
    Branch --> P1[Priority 1: Remove Home Variations]
    P1 --> Test1{Test Passes?}
    Test1 -->|Yes| Commit1[Commit Changes]
    Test1 -->|No| Fix1[Fix Issues]
    Fix1 --> Test1
    
    Commit1 --> P2[Priority 2: Remove Feature Pages]
    P2 --> Test2{Test Passes?}
    Test2 -->|Yes| Commit2[Commit Changes]
    Test2 -->|No| Fix2[Fix Issues]
    Fix2 --> Test2
    
    Commit2 --> P3[Priority 3: Remove Demo Pages]
    P3 --> Test3{Test Passes?}
    Test3 -->|Yes| Commit3[Commit Changes]
    Test3 -->|No| Fix3[Fix Issues]
    Fix3 --> Test3
    
    Commit3 --> P4[Priority 4: Remove Misc]
    P4 --> FinalTest{Final Test Passes?}
    FinalTest -->|Yes| Merge[Merge to Main]
    FinalTest -->|No| Rollback[Rollback]
    
    Merge --> Done([Cleanup Complete])
    
    style Start fill:#6bcf7f
    style Done fill:#6bcf7f
    style Backup fill:#ffd93d
    style Branch fill:#ffd93d
    style Merge fill:#6bcf7f
    style Rollback fill:#ff6b6b
```

## Store Module Status

```mermaid
graph LR
    subgraph "Used Stores ✅"
        S1[api.ts]
        S2[costomizer.ts]
        S3[filter.ts]
        S4[property.ts]
        S5[sidebarfilter.ts]
        S6[user.ts]
        S7[wizard.ts]
    end
    
    subgraph "Unused Stores ❌"
        U1[propertysale.ts]
    end
    
    style S1 fill:#6bcf7f
    style S2 fill:#6bcf7f
    style S3 fill:#6bcf7f
    style S4 fill:#6bcf7f
    style S5 fill:#6bcf7f
    style S6 fill:#6bcf7f
    style S7 fill:#6bcf7f
    style U1 fill:#ff6b6b
```

## Expected Benefits

```mermaid
graph TD
    Cleanup[Code Cleanup] --> B1[Build Time: 30-50% Faster]
    Cleanup --> B2[Bundle Size: 40-60% Smaller]
    Cleanup --> B3[Codebase: 81% Smaller]
    Cleanup --> B4[Maintenance: Much Easier]
    Cleanup --> B5[IDE Performance: Faster]
    
    style Cleanup fill:#ffd93d
    style B1 fill:#6bcf7f
    style B2 fill:#6bcf7f
    style B3 fill:#6bcf7f
    style B4 fill:#6bcf7f
    style B5 fill:#6bcf7f
```

## Layout Usage Distribution

```mermaid
graph TD
    L[12 Total Layouts] --> Used[8 Used Layouts]
    L --> Unused[4 Unused/Rarely Used]
    
    Used --> L2[Layout2: 22 uses - PRIMARY]
    Used --> L1[Layout1: 2 uses]
    Used --> L3[Layout3: 2 uses]
    Used --> L4[Layout4: 2 uses]
    Used --> L5[Layout5: 2 uses]
    Used --> L6[Layout6: 2 uses]
    Used --> L8[Layout8: 2 uses]
    Used --> L10[Layout10-12: 2 uses each]
    
    Unused --> L7[Layout7: 0 uses ❌]
    Unused --> L9[Layout9: 0 uses ❌]
    
    style L2 fill:#6bcf7f
    style L7 fill:#ff6b6b
    style L9 fill:#ff6b6b
```
