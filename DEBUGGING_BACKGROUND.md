# Debugging Interactive Background

## How to Check if It's Working

1. **Open your portfolio**: http://localhost:5173

2. **Open Browser DevTools**:
   - Press `F12` or `Right-click > Inspect`
   - Go to the **Console** tab

3. **Look for these console messages**:
   ```
   InteractiveBackground mounted
   Canvas ref: <canvas>
   Canvas element found: <canvas>
   2d context obtained
   Canvas resized to: [width]x[height]
   Created 50 particles
   ```

4. **Check the Elements tab**:
   - Look for a `<canvas>` element in the DOM
   - It should be inside the Layout component
   - It should have `position: fixed` and cover the full screen

5. **Visual Check**:
   - You should see small teal dots (particles) floating on the screen
   - Move your cursor around - particles should be attracted to it
   - Lines should connect between nearby particles
   - Lines should connect from particles to your cursor

## If You Don't See It

### Check 1: Is the canvas element present?
- Open DevTools > Elements
- Search for `<canvas`
- If not found, the component isn't rendering

### Check 2: Check console for errors
- Look for any red error messages
- Common issues:
  - "Canvas ref is null" - component not mounted
  - "Could not get 2d context" - browser issue

### Check 3: Check z-index
- The canvas should be visible above the background
- Current z-index: 1
- It should NOT be behind other content

### Check 4: Hard refresh
- Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- This clears the cache and reloads

### Check 5: Check if particles are visible
- The particles are teal colored: `rgba(0, 188, 212, opacity)`
- They are small (1-3px)
- Opacity is set to 1 (100%)

## Manual Test

If you still don't see it, try this:

1. Open the console
2. Type:
   ```javascript
   document.querySelector('canvas')
   ```
3. If it returns `null`, the canvas isn't in the DOM
4. If it returns a canvas element, check its size:
   ```javascript
   const canvas = document.querySelector('canvas');
   console.log(canvas.width, canvas.height);
   ```

## Expected Behavior

When working correctly:
- **50 teal particles** floating around
- **Particles move** independently
- **Cursor attraction**: Particles move toward your cursor when within 200px
- **Connection lines**: Thin teal lines between nearby particles
- **Cursor lines**: Lines from particles to cursor when close
- **Smooth animation**: 60 FPS

## Quick Fix Options

If it's still not working, try:

1. **Increase particle size** (make them more visible):
   - Edit `src/hooks/useInteractiveBackground.ts`
   - Line 51: Change `size: Math.random() * 2 + 1` to `size: Math.random() * 5 + 3`

2. **Increase opacity**:
   - Already set to 1 (100%)

3. **Change color to white** (more visible):
   - Edit `src/hooks/useInteractiveBackground.ts`
   - Line 96: Change `rgba(0, 188, 212, ...)` to `rgba(255, 255, 255, ...)`

4. **Add a test rectangle**:
   - Add this after line 62 in the hook:
   ```typescript
   ctx.fillStyle = 'red';
   ctx.fillRect(100, 100, 200, 200);
   ```
   - If you see a red rectangle, canvas is working

## Contact Me

If none of this works, please:
1. Share the console output
2. Share a screenshot of the DevTools Elements tab
3. Let me know what browser you're using

The code is correct and should work - we just need to debug why it's not visible!
