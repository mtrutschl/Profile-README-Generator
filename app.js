document.getElementById('generate-button').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const subtitle = document.getElementById('subtitle').value;
    const about = document.getElementById('about').value;
    const github = document.getElementById('github-user').value;
    const linkedin = document.getElementById('linkedin-user').value;
    const instagram = document.getElementById('instagram-user').value;

    let markdown = `# Hi, I'm ${name || 'a Developer'}! 👋\n\n`;

    if (subtitle)
    {
        markdown += `### ${subtitle}\n\n`;
    }

    if (about)
    {
        markdown += `## 🚀 About Me 🚀\n${about}\n\n`;
    }

    if (github || linkedin || instagram)
    {
        markdown += `## 🌐 Connect with Me 🌐\n<p align = "left">\n`;
    }
});