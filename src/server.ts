import express from 'express'

const app = express()

const port = 3000



app.listen(port, () => {
    console.log(`Server up and running on http://localhost:${port}`)
})

export default app