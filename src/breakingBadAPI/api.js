class BreakingBad{

    constructor(baseURLQuote = "https://api.breakingbadquotes.xyz/v1/quotes", baseURLCharacterInfo = "https://breakingbadapi.com/api/") {
        this.baseURLQuote = baseURLQuote;
        this.baseURLCharacterInfo = baseURLCharacterInfo;

        this.correctCharacterNamesKeys = [...this.nameCorrector.keys()]
    }


    getRandomQuote(){
        return fetch(`${this.baseURLQuote}`)
            .then(response=>response.json())
    }
    getCharacterInfoByName(characterName){
        console.log(`${this.baseURLCharacterInfo}characters?name=${characterName}`)
        return fetch(`${this.baseURLCharacterInfo}characters?name=${characterName}`)
            .then(response=>response.json())
    }

    correctName(name){
        console.log(this.correctCharacterNamesKeys.includes(name.toLowerCase()))
         if (this.correctCharacterNamesKeys.includes(name.toLowerCase())){
            return this.nameCorrector.get(name.toLowerCase());
         }
         return name;
    }
    
    getImagePath(name){
        console.log(this.correctName(name))
        return this.correctName(name)
    }

    nameCorrector = new Map([
        ["walter white", "https://sun2-9.userapi.com/impg/KU2FMeuPLSHc8yN7_S6ZB8i5ghkra6Mg3Bb27A/wh1BFfb58ns.jpg?size=748x1004&quality=96&sign=b8e99e7d8ec4a20e0fe91861083015e8&type=album"],
        ["saul goodman", "https://sun9-24.userapi.com/impg/HJO7mUisJ8czAkXjsugm3KiHtHZt1UUwuTe5tQ/wwHqrzpXn9o.jpg?size=1536x2048&quality=96&sign=fd1d2e67b373fbe944add5ef88fb7468&type=album"],
        ["hank schrader", "https://sun9-66.userapi.com/impg/7YXXXFHggHVkf_9oiDE6N3VhyYHC9nLtoEO1nA/BqR8LqtxbIU.jpg?size=750x1000&quality=96&sign=a5ebcb85eb7aac96fd80733909f9c175&type=album"],
        ["skyler white", "https://sun9-47.userapi.com/impg/LkDZuCshrbWJv83yDWXjpXF-Re9V1T35NXkDeg/mxmyro4terY.jpg?size=405x540&quality=96&sign=c502e904f7e67f484891b967494aec49&type=album"],
        ["mike ehrmantraut", "https://sun2-9.userapi.com/impg/KHP7SGb4NTfBkyBRoIo6pLDuVSh8VgpDKsFERg/noXfqMzshEs.jpg?size=264x377&quality=96&sign=54e7f54f5c987ce8e116b67736dc8ad8&type=album"],
        ["jesse pinkman", "https://sun9-63.userapi.com/impg/ZlOTJPiif7hqGG6l2mCuJPLriS0ft5qKQkovsA/dAai0WDbtdA.jpg?size=750x1000&quality=96&sign=5a7975680649dd2cac53059d61d9f9a2&type=album"],
        ["gustavo fring", "https://sun9-29.userapi.com/impg/vVDlcC_3D2qmDpmVwCNh-azb297R1aaTOuEtpA/Mx_HV-JV_gI.jpg?size=700x1000&quality=96&sign=42124213df280cfbba3dcf1c0950afdc&type=album"],
        ["walter white jr", "https://sun9-35.userapi.com/impg/2jQOe1ZSui2acAY_Y25wGiMpVSDuoMdmYlnRsg/qdqU1M3xAj4.jpg?size=1600x2132&quality=96&sign=69672a45bdab612c3b0437a56207ecd6&type=album"],
        ["the fly", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mouche_verte_dos.jpg"],
        ["badger", "https://sun9-3.userapi.com/impg/IKnT5BqBL8Dy2j-1lhjeYmbuQ-wmVkgrZz4nTw/3p37GUlwdWA.jpg?size=2048x1536&quality=96&sign=cd76ab28c12cc0104cb5f7ea698dcc6b&type=album"]
      ]);


}

export {BreakingBad}
