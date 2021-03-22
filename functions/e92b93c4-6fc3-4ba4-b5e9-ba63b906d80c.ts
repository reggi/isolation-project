import iso from '..'

export default function (this: typeof iso.example) {
    return 'Bar' + this.foo()
}