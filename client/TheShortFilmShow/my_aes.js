//aes加密
function encrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("grpt05glhf#123jt"); //16位
    var iv = CryptoJS.enc.Utf8.parse("grpt05glhf#123jt");
    var encrypted = '';
    if (typeof(word) == 'string') {
        var srcs = CryptoJS.enc.Utf8.parse(word);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    } else if (typeof(word) == 'object') {//对象格式的转成json字符串
        data = JSON.stringify(word);
        var srcs = CryptoJS.enc.Utf8.parse(data);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    }
    return encrypted.ciphertext.toString();
}
// aes解密
function decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("grpt05glhf#123jt"); 
    var iv = CryptoJS.enc.Utf8.parse("grpt05glhf#123jt");
    var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}