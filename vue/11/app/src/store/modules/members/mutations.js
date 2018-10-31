export default { 
    CHANGE_TIME(state) {
        state.time = new Date().toLocaleString()
    }
}