# HTML Presentation - User Guide

This directory contains an HTML presentation created from `PRESENTATION.md`.

## File

- **presentation.html** - Self-contained HTML presentation with presenter notes

## How to Use the Presentation

### Opening the Presentation

1. **Local File**: Simply open `presentation.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
   ```bash
   # On macOS
   open presentation.html
   
   # On Linux
   xdg-open presentation.html
   
   # On Windows
   start presentation.html
   ```

2. **Web Server** (recommended for best compatibility):
   ```bash
   # Using Python
   python -m http.server 8000
   # Then open http://localhost:8000/presentation.html
   
   # Using Node.js
   npx http-server
   # Then open http://localhost:8080/presentation.html
   ```

### Navigating the Presentation

- **Next Slide**: Press `→` (right arrow), `Space`, or `Page Down`
- **Previous Slide**: Press `←` (left arrow) or `Page Up`
- **First Slide**: Press `Home`
- **Last Slide**: Press `End`
- **Slide Overview**: Press `Esc` or `O` to see all slides at once
- **Speaker Notes**: Press `S` to open speaker notes in a separate window
- **Fullscreen**: Press `F` to enter fullscreen mode
- **Black Screen**: Press `B` to pause and show black screen
- **Help**: Press `?` to see all keyboard shortcuts

### Presenter Mode (Speaker Notes)

The presentation includes comprehensive speaker notes for every slide.

**To use presenter mode:**

1. Open the presentation in your browser
2. Press `S` on your keyboard
3. A new window opens with:
   - Current slide (for the audience/projector)
   - Next slide preview
   - Speaker notes for the current slide
   - Timer
   - Slide progress

**Setup for Presenting:**

1. Open the presentation
2. Press `S` to open speaker view
3. Move the speaker view window to your laptop screen
4. Move the main presentation window to the projector/shared screen
5. Navigate using arrow keys in either window
6. Read speaker notes from your laptop while audience sees the slides

### Features

- **55-minute presentation** covering 5 GitHub Actions demos
- **Comprehensive speaker notes** for every slide - tells you exactly what to say
- **Visual comparisons** between Jenkins and GitHub Actions
- **Code examples** with syntax highlighting
- **Professional theme** with good contrast for projectors
- **Responsive design** works on different screen sizes
- **Timer** in speaker notes to track presentation time
- **Slide numbers** to track progress

### Presentation Structure

1. **Title & Introduction** (2 minutes)
2. **Demo 1: Matrix Builds** (10 minutes)
3. **Demo 2: Reusable Workflows** (10 minutes)
4. **Demo 3: Environments & Deployment Gates** (10 minutes)
5. **Demo 4: Dynamic Job Generation** (10 minutes)
6. **Demo 5: Custom Actions** (10 minutes)
7. **Q&A** (5 minutes)
8. **Closing & Resources** (2 minutes)

### Tips for Best Results

1. **Test before presenting**: Open the presentation beforehand to ensure it loads correctly
2. **Use speaker notes**: Press `S` to access detailed talking points for each slide
3. **Practice navigation**: Get comfortable with arrow keys and the `Esc` overview
4. **Check projector**: Some projectors have lower resolution - test the display
5. **Have backup**: Download the presentation so it works offline
6. **Fullscreen mode**: Press `F` for distraction-free presenting
7. **Engagement**: Use the pause feature (`B`) when answering questions

### Customization

The presentation is a single HTML file that can be easily customized:

- **Theme**: Change the CSS theme by modifying the `<link>` tag (black, white, league, sky, beige, simple, serif, blood, night, moon, solarized)
- **Colors**: Edit the `<style>` section to change colors
- **Content**: Edit the HTML directly to add/remove/modify slides
- **Transitions**: Modify the `Reveal.initialize()` settings at the bottom

### Technical Details

- **Framework**: Reveal.js 4.6.0
- **Plugins**: Notes, Highlight
- **Dependencies**: Loaded from CDN (requires internet connection)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **File Size**: ~47KB (self-contained)

### Troubleshooting

**Problem**: Presentation doesn't load
- **Solution**: Check internet connection (CSS/JS loaded from CDN) or use a local web server

**Problem**: Speaker notes don't open
- **Solution**: Check if pop-ups are blocked in your browser settings

**Problem**: Code highlighting doesn't work
- **Solution**: Ensure internet connection for highlight.js library

**Problem**: Slides look wrong on projector
- **Solution**: Adjust browser zoom level or change resolution in Reveal settings

### Converting Back to Markdown

The HTML presentation is generated from `PRESENTATION.md`. To update:

1. Edit `PRESENTATION.md`
2. Regenerate the HTML (manual process)
3. The original markdown structure is preserved in speaker notes

## Keyboard Shortcuts Reference

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `S` | Speaker notes |
| `F` | Fullscreen |
| `Esc` or `O` | Overview mode |
| `B` | Pause (black screen) |
| `?` | Show help |
| `Home` | First slide |
| `End` | Last slide |

## Support

For questions or issues with the presentation:
1. Check this README
2. Visit [Reveal.js documentation](https://revealjs.com/)
3. Check browser console for errors
4. Ensure internet connection for CDN resources

---

**Ready to present?** Open `presentation.html` and press `S` to start with speaker notes! 🚀
