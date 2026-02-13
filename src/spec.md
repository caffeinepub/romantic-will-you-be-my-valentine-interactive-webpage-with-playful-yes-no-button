# Specification

## Summary
**Goal:** Make the Valentine page “No” button jump to a random on-screen position after each successful click, without breaking existing evasive behavior or the escalating “No” prompt sequence.

**Planned changes:**
- Update the “No” button click handler to immediately reposition the button to a new random (x, y) location within the current visible viewport after each successful click.
- Ensure random positioning accounts for the button’s rendered width/height so it never appears partially off-screen.
- Keep the existing evasive behavior on pointer approach / mouse down, and keep the existing escalating “No” prompt logic unchanged.
- Make positioning work responsively across desktop and mobile viewports (not constrained to a fixed-size container).

**User-visible outcome:** When a user manages to click “No,” it still advances the existing escalating prompts, and the “No” button instantly reappears in a new random location anywhere on the screen while continuing to dodge the cursor.
