//区分接口环境
export const APIURL = (() => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return {
                url: '本地环境'
            }
        case 'testingenv':
            return {
                url: '测试环境'
            }
        case 'prerelease':
            return {
                url: '预生产环境'
            }
        default:
            return {
                url: '线上环境'
            }
    }
})(); 
