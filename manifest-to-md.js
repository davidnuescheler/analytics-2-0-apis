const manifest=require('./manifest-docs.json')

function toMd (pages, padding) {
    pages.forEach( p => { 
        console.log(`${padding}- [${p.title}](${p.path.split('/master')[1]})`);
        if (p.pages) toMd (p.pages, padding+'  ');
    });
}

toMd (manifest.pages, '');