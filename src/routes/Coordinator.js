
export const goPage = (navigate, path) => {
    navigate(path)
}

export const goPageHome = (navigate, path, language) => {
    navigate(`${path}/${language}`)
}