var sensors = require('sa-sdk-javascript')
sensors.init({
    server_url: 'www.degebug.com',
    show_log: true
})
sensors.quick('autoTrack')

export const trackClick = function () {
    sensors.track('webButClick', {
        element_content: 'button'
    })
}
