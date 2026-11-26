# Jinhong Huang · Academic Homepage

Personal academic website for Jinhong Huang, a Ph.D. student at Fudan University and member of CODA lab.

- Website: https://electrowarriors.github.io/
- Repository: https://github.com/ElectroWarriors/ElectroWarriors.github.io

## Pages

- `index.html`: personal introduction and news.
- `research/index.html`: research interests and publications.
- `projects/index.html`: RAPID-DTC, ULTRA-2.5D, and the undergraduate graduation project.
- `education/index.html`: education.
- `styles.css` and `script.js`: shared styles and optional theme switching.
- `assets/`: profile image, project figures, and favicon.
- `404.html`: custom not-found page.
- `.nojekyll`: serves the files directly without Jekyll processing.

Each page is standalone HTML. Navigation, sidebar, and footer changes should be applied consistently across all four pages. No dependencies or build step are required.

## Local preview

Run from the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ and stop the server with Ctrl+C when finished.

## Deployment

GitHub Pages publishes the `main` branch from `/(root)`.
Push changes to `main` to update the website:

```sh
git add <changed-files>
git commit -m "Update website"
git push
```

Deployment progress is available in the repository's Actions tab and Settings → Pages.

## Credits and sources

- Layout inspired by [AcademicPages](https://github.com/academicpages/academicpages.github.io) and [Yaojia Wang's homepage](https://wang-yaojia.github.io/); implemented as standalone HTML, CSS, and JavaScript.
- Biography and publication information: [CODA lab profile](https://krz.engineer/people/jinhong-huang/), with additions and corrections by Jinhong Huang.
- Project descriptions: [RAPID-DTC](https://github.com/ElectroWarriors/RAPID-DTC), [ULTRA-2.5D](https://github.com/ElectroWarriors/ULTRA-2.5D), and [graduation_project](https://github.com/ElectroWarriors/graduation_project).
- RAPID-DTC framework figure from the project's repository.
- Project overview and interface screenshots supplied by Jinhong Huang.
- Profile photograph supplied by Jinhong Huang.
