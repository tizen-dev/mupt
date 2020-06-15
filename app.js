function generate(options = {}) {
    let output = `tellraw ${options.target} `
    switch (options.action) {
        case 'player_join':
            output += JSON.stringify([{
                text: `${options.props.player} has joined the game`,
                color: "yellow"
            }])
            break
        case 'player_leave':
            output += JSON.stringify([{
                text: `${options.props.player} has left the game`,
                color: "yellow"
            }])
            break
        case 'player_chat':
            output += JSON.stringify([{
                text: `<${options.props.player}> ${options.props.message}`,
            }])
            break
        case 'player_death-by-entity':
            output += JSON.stringify([{
                text: `${options.props.victim} was slain by ${options.props.killer}`,
            }])
            break
        case 'player_death-by-entity-fall':
            output += JSON.stringify([{
                text: `${options.props.victim} hit the ground too hard while trying to escape ${options.props.killer}`,
            }])
            break
        case 'player_death-by-entity-drown':
            output += JSON.stringify([{
                text: `${options.props.victim} drowned while trying to escape ${options.props.killer}`,
            }])
            break
        default:
            output = 'Error: Action not defined'
    }
    return output
}