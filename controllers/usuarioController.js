const formularioLogin = (req, res) => {
    res.render('auth/login',{
        autenticado: false
    })
}

//Export es multiple y export default solo es uno por archivo
export {
    formularioLogin
}