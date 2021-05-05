var term = new Term({
    container: '#term',
    debug:false,
    width: 800,
    height: 650,
    pixelRatio: 2,
    autofocus: true,
    watermark: '',
    title: `Clément Avenel v26.46.4`,
    prefix: 'root@clement-avenel: ~ <d color="#00f501">$</d> ',
    welcome: `Last login: ${new Date()}\n-----------------------------\n🎉 Hello, welcome on my personal <d color="yellow">Website</d>\n<d color="#00f501">name:</d> Clément Avenel \n<d color="#00f501">birthday:</d> 06/06/1994 \n<d color="#00f501">location:</d> Rouen, Normandy, FRANCE \n<d color="#00f501">description:</d> Tech Addict !🤪 \n<d color="#00f501">email:</d> contact@clement-avenel.com \n<d color="#00f501">phone:</d> +33 6 48 09 58 02 \nStack: <d color="#00f501" border> node-js </d> <d color="#00f501" border> react-js </d> <d color="#00f501" border> express-js </d> <d color="#00f501" border> python </d> <d color="#00f501" border> mongo-db </d> <d color="#00f501" border> tailwind-css </d>\n-----------------------------\n `,
    loading: () => '<d color="yellow">Please wait for a moment...</d>',
    notFound: (val) => `🤷‍♂️ : <d color='red'>${val}</d> : command not found`,
    actions: [
        {
            // Manu
            input: /^menu$/i,
            output() {
                this.radio([
                    {
                        key: 'about',
                        text: 'about',
                    },
                    {
                        key: 'xp',
                        text: 'xp',
                    },
                    {
                        key: 'news',
                        text: 'news',
                    },
                    {
                        key: 'contact',
                        text: 'contact',
                    },
                ]).then((key) => {
                    this.type(`${key}`, true).input();
                });
            },
        },
        {
            // Regular match
            input: /^about/i,
            output: `\n-----------------------------\n<d color="#00f501">name:</d> Clément Avenel \n<d color="#00f501">birthday:</d> 06/06/1994 \n<d color="#00f501">location:</d> Rouen, Normandy, FRANCE \n<d color="#00f501">description:</d> Tech Addict !🤪 \n<d color="#00f501">email:</d> contact@clement-avenel.com \n<d color="#00f501">phone:</d> +33 6 48 09 58 02 \nStack: <d color="#00f501" border> node-js </d> <d color="#00f501" border> react-js </d> <d color="#00f501" border> express-js </d> <d color="#00f501" border> python </d> <d color="#00f501" border> mongo-db </d> <d color="#00f501" border> tailwind-css </d>\n-----------------------------\n`,
        },
        {
            // Regular match
            input: /^xp/i,
            output: "😄 XP. BlablablaBlablablaBlablablaBlablablaBlablablaBlablablaB lablablaBl abla bl aB labla blaBlab lablaBlablabla BlablablaBlab labl aBlablab laBlablablaBlabla blaBlablabla Bla blabla Blablabl aBlabla blaBlablabla Bla bl abla",
        },
        {
            // Regular match
            input: /^news/i,
            output: "😄 News. BlablablaBlablablaBlablablaBlablablaBlablablaBlablablaB lablablaBl abla bl aB labla blaBlab lablaBlablabla BlablablaBlab labl aBlablab laBlablablaBlabla blaBlablabla Bla blabla Blablabl aBlabla blaBlablabla Bla bl abla",
        },
        {
            // Regular match
            input: /^contact/i,
            output: `😄 Contact. \n BlablablaBlablablaBlablablaBlablablaBlablablaBlablablaB lablablaBl abla bl aB labla blaBlab lablaBlablabla BlablablaBlab labl aBlablab laBlablablaBlabla blaBlablabla Bla blabla Blablabl aBlabla blaBlablabla Bla bl abla`,
        },
        {
            // Clear all log
            input: /^clear$/i,
            output() {
                this.clear();
                return '<d color="#27C93F">Cleared successfully</d>';
            },
        },
    ],
});
term.type('menu');
