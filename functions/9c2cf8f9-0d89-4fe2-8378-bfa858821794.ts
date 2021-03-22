import iso from '..'

export default function (this: typeof iso.example | typeof iso.greeting) {
    return 'Hello World'
}