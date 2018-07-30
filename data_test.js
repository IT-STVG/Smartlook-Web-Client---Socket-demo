// data để gửi đến server
var data_send_1 = {
    "name": "data1",
    "type": "string",
    "length": "14",
    "data": "string data1"
}
var data_send_2 = {
    "name": "data2",
    "type": "object",
    "length": "2",
    "data": [{
            "name": "data2_1",
            "type": "base64",
            "length": "18",
            "data": "data2_1"
        },
        {
            "name": "data2_2",
            "type": "string",
            "length": "6",
            "data": "abcd"
        }
    ]
}
var data_send_3 = {
    "name": "data3",
    "type": "object",
    "length": "2",
    "data": [{
            "name": "data3_1",
            "type": "base64",
            "length": "18",
            "data": "data3_1"
        },
        {
            "name": "data3_2",
            "type": "object",
            "length": "3",
            "data": [{
                    "name": "data3_2_1",
                    "type": "string",
                    "length": "18",
                    "data": "data3_2_1"
                },
                {
                    "name": "data3_2_2",
                    "type": "object",
                    "length": "2",
                    "data": [{
                            "name": "data3_2_2_1",
                            "type": "base64",
                            "length": "18",
                            "data": "data3_2_2_1"
                        },
                        {
                            "name": "data3_2_2_2",
                            "type": "string",
                            "length": "6",
                            "data": "data3_2_2_1"
                        }
                    ]
                },
                {
                    "name": "data3_2_2",
                    "type": "string",
                    "length": "18",
                    "data": "data3_2_2"
                },
                {
                    "name": "data3_2_3",
                    "type": "string",
                    "length": "18",
                    "data": "data3_2_3"
                }
            ]
        }
    ]
}



// data từ server
var data_receive_1 = "{name:\"data1\";type:\"string\";length:\"14\";data:\"string data1\"}";
var data_receive_2 =
    "{name:\"data2\";type:\"object\";length:\"2\";data:\"{name:\"data2_1\";type:\"base64\";length:\"18\";data:data2_1}{name:\"data2_2\";type:\"string\";length:\"6\";data:\"data2_2\"}\"}";
var data_receive_3 =
    "{name:\"data3\";type:\"object\";length:\"2\";data:\"{name:\"data3_1\";type:\"base64\";length:\"18\";data:data3_1}{name:\"data3_2\";type:\"object\";length:\"3\";data:\"data2_2\"}\"}";

var data_receive_3 = 
    "{name:\"data3\";type:\"object\";length:\"2\";data:{name:\"data3_1\";type:\"base64\";length:\"18\";data:\"data3_1\"}{name:\"data3_2\";type:\"object\";length:\"3\";data:\"[object Object],[object Object],[object Object],[object Object]\"}}"

var data_send_3 = {
    "name": "data3",
    "type": "object",
    "length": "2",
    "data": [{
            "name": "data3_1",
            "type": "base64",
            "length": "18",
            "data": "data3_1"
        },
        {
            "name": "data3_2",
            "type": "object",
            "length": "3",
            "data": [{
                    "name": "data3_2_1",
                    "type": "string",
                    "length": "18",
                    "data": "data3_2_1"
                },
                {
                    "name": "data3_2_2",
                    "type": "object",
                    "length": "2",
                    "data": [{
                            "name": "data3_2_2_1",
                            "type": "base64",
                            "length": "18",
                            "data": "data3_2_2_1"
                        },
                        {
                            "name": "data3_2_2_2",
                            "type": "string",
                            "length": "6",
                            "data": "data3_2_2_1"
                        }
                    ]
                },
                {
                    "name": "data3_2_2",
                    "type": "string",
                    "length": "18",
                    "data": "data3_2_2"
                },
                {
                    "name": "data3_2_3",
                    "type": "string",
                    "length": "18",
                    "data": "data3_2_3"
                }
            ]
        }
    ]
}