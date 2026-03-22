# AtaJS.github.io — Portfolio

Personal portfolio website for Ata Jodeiri Seyedian.

## Setup (5 minutes)

### 1. Create the GitHub repository
1. Go to github.com and log in as AtaJS
2. Click **New repository**
3. Name it exactly: `AtaJS.github.io`
4. Set it to **Public**
5. Click **Create repository**

### 2. Upload the files
**Option A — GitHub website (no terminal needed):**
1. Open your new repo on GitHub
2. Click **Add file → Upload files**
3. Drag and drop ALL files and folders from this zip
4. Click **Commit changes**

**Option B — Git terminal:**
```bash
git clone https://github.com/AtaJS/AtaJS.github.io
cd AtaJS.github.io
# copy all files here
git add .
git commit -m "Initial portfolio"
git push
```

### 3. Your site is live at:
**https://AtaJS.github.io** (takes ~1 minute after push)

---

## Customization

### Add your profile photo
- Place your photo in `assets/` named `profile.jpg`
- It's already referenced in `index.html`

### Add your CV PDF
- Place your CV in `assets/` named `CV_Ata_Jodeiri.pdf`
- The download button in `index.html` already links to it

### Add gallery photos
- Create folder `assets/gallery/`
- Place photos there
- In `gallery.html`, replace placeholder divs with:
```html
<img src="assets/gallery/your-photo.jpg" class="gallery-img" alt="description" />
```

### Add certifications
- Place certificate images in `assets/gallery/`
- Replace placeholders in gallery.html

### When your paper is submitted
- In `publications.html`, change `status-in-prep` class to `status-submitted`
- Update the status text from "In Preparation" to "Under Review" or "Published"
- Add DOI/link when available

---

## File structure
```
AtaJS.github.io/
├── index.html          ← Home page
├── research.html       ← rPPG thesis research
├── projects.html       ← All projects
├── experience.html     ← Timeline, skills, achievements
├── publications.html   ← Papers & presentations
├── gallery.html        ← Photos, videos, certs
├── css/
│   └── style.css      ← All styles (one file)
├── js/
│   └── main.js        ← Navigation & scroll effects
└── assets/
    ├── profile.jpg     ← Your photo (add this)
    ├── CV_Ata_Jodeiri.pdf  ← Your CV (add this)
    └── gallery/        ← Create this folder, add photos
```
