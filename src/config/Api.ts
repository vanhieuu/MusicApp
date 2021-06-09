const base_url = "https://60c01b59b8d36700175543a8.mockapi.io"
const urls = {
    song: base_url +"/Song",
    songByKey: (name:string) => base_url + `Song?name=${name}`
};

export default urls;