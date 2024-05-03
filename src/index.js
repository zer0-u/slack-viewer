import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        explanation: 'このアプリケーションの使い方',
        path: '/posts',
        parameters: {
            word: '検索ワード',
            since: '開始日',
            until: '終了日',
            channel: 'チャンネル名'
        }
    });
});

app.get('/posts', (req, res) => {
    const { word, since, until, channel } = req.query;
    res.send(`Requested word ${word}, from ${since} to ${until} in ${channel}`);
})

app.listen(port);