module.exports = {
    getTemp(location) {
        const apiKey = '0d8b75de9e5a3bc8ab9b57ed96701852';
        const url    = 'http://api.openweathermap.org/data/2.5/find?&units=metric&appid='

        return new Promise(function(resolve, reject) {
            var xhr     = new XMLHttpRequest();
            var reqUrl  = `${url}${apiKey}&q=${location}`;

            xhr.open('Get', reqUrl);

            xhr.onload = function(e) {
                let data = JSON.parse(xhr.response);

                if (data.cod !== '200') {
                    throw new Error(data.message);
                }

                if ( data.count === 0 ) {
                    let message = 'No data about this city';
                    reject(message);
                }

                resolve(data);
            };
            xhr.send();
        });
    }
}
