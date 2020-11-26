import webfont from 'webfont';

webfont({
    files: 'src/svg-icons/**/*.svg',
    fontName: 'my-font-name',
})
    .then((result) => {
        console.log(result);

        return result;
    })
    .catch((error) => {
        throw error;
    });
