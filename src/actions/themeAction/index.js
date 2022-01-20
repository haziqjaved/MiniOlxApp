function updatedTheme(theme) {
    console.log('ACTION CALLED >>>', theme)
    return {
        type : 'UPDATED_THEME',
        data : theme
    }
}

function removedTheme() {
    return {
        type : 'REMOVED_THEME',
    }
}

export {
    updatedTheme,
    removedTheme
}