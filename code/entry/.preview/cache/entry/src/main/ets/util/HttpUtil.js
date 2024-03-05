import http from '@ohos:net.http';
export function httpRequestGet(url) {
    let httpRequest = http.createHttp();
    let responseResult = httpRequest.request(url, {
        method: http.RequestMethod.GET,
        readTimeout: 60000,
        header: {
            'Content-Type': "application/json",
        },
        connectTimeout: 60000,
        extraData: {}
    });
    let serverData;
    // Processes the data and returns.
    return responseResult.then((value) => {
        if (value.responseCode === 200) {
            // Obtains the returned data.
            let result = `${value.result}`;
            let resultJson = JSON.parse(result);
            serverData = resultJson;
        }
        else {
            serverData = `请求失败${value.responseCode}`;
        }
        return serverData;
    }).catch(() => {
        serverData = "请求失败";
        return serverData;
    });
}
//# sourceMappingURL=HttpUtil.js.map