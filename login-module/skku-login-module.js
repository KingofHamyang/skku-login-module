

const request = require('request').defaults({ jar: true });
const cheerio = require('cheerio');
const jar = request.jar();



exports.login_confirm = function login_confirm_semiconductor(id, passwd, call) {
    var result = 0;
    var infolist = [];
    var resultinfo = [];
    var forms1 = {
        id: id,
        lang: 'KO',
        pwd: passwd
    }

    const options_login_JSESSIONID = {
        //  url: 'https://sugang.skku.edu/skku/core?attribute=frame&fake=' + new Date(),
        url: 'https://sugang.skku.edu/skku/login?attribute=loginChk',
        method: 'POST',
        headers: {
            'Accept': 'text/html, application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client',
            'Connection': 'keep-alive',

        },
        form: forms1
    };

    request(options_login_JSESSIONID, function (err, res, body) {
        var returncode = JSON.parse(body)["code"];
        //   console.log(returncode)
        var headers1 = {
            'Accept': 'text/html, application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3745.4 Safari/537.36',
            'Cookie': ''
        }

        //  console.log(headers1);
        const options1 = {
            url: 'https://sugang.skku.edu/skku/core?attribute=frame&fake=Tue%20Apr%2002%202019%2001:30:21%20GMT+0900%20(%ED%95%9C%EA%B5%AD%20%ED%91%9C%EC%A4%80%EC%8B%9C)',
            method: 'POST',
            headers: headers1,
            form: forms1
        };
        if (returncode == "200") {
            request(options1, function (err, res, body) {

                var $ = cheerio.load(body);


                var tablelist = $('.tableList3').children('tbody').children('tr').each((i, item) => {

                    infolist.push($(item).children('td').text());
                });

                if (call) {
                    resultinfo.push(infolist[3]);
                    resultinfo.push(infolist[4]);
                    resultinfo.push(infolist[5]);
                    resultinfo.push(infolist[6]);
                    call(resultinfo);
                }

            })
        }
        else {
            if (call) { call(resultinfo); }

        }
    });


}
