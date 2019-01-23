export class AppConstnats {
    public static readonly TCH1 = [
        {
            "start": "2019-01-23T10:00:00+00:00",
            "end": "2019-01-23T11:00:00+00:00",
            "text": "Class 3 &nbsp&nbsp&nbsp EVS ",
            "color": "#de3d83",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_1" }
        },
        {
            "start": "2019-01-24T09:00:00+00:00",
            "end": "2019-01-24T11:00:00+00:00",
            "text": "",
            "color": "#dedede",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        },
        {
            "start": "2019-01-24T11:00:00+00:00",
            "end": "2019-01-24T13:00:00+00:00",
            "text": "",
            "color": "#dedede",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        }
        ,
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T14:00:00+00:00",
            "text": "Lunch",
            "color": "#008000",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        },
        {
            "start": "2019-01-24T14:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 3 &nbsp&nbsp&nbsp EVS ",
            "color": "#f67944",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        }
    ];

    public static readonly TCH2 = [
        {
            "start": "2019-01-23T11:00:00+00:00",
            "end": "2019-01-23T12:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp Geography ",
            "color": "#de3d83",
            "data": { "class": "Class 3", "subject": "Geography", "period": "PTCH2_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp Geography ",
            "color": "#f67944",
            "data": { "class": "Class 4", "subject": "Geography", "period": "PTCH2_2" }
        }
    ];

    public static readonly TCH3 = [
        {
            "start": "2019-01-23T14:00:00+00:00",
            "end": "2019-01-23T15:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp EVS ",
            "color": "#de3d83",
            "data": { "class": "Class 4", "subject": "EVS", "period": "PTCH3_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp EVS ",
            "color": "#f67944",
            "data": { "class": "Class 4", "subject": "EVS", "period": "PTCH3_2" }
        }
    ];

    public static readonly TCH4 = [
        {
            "start": "2019-01-23T14:00:00+00:00",
            "end": "2019-01-23T15:00:00+00:00",
            "text": "Class 5 &nbsp&nbsp&nbsp Geography ",
            "color": "#de3d83",
            "data": { "class": "Class 4", "subject": "Geography", "period": "PTCH4_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 5 &nbsp&nbsp&nbsp EVS ",
            "color": "#f67944",
            "data": { "class": "Class 5", "subject": "Geography", "period": "PTCH4_2" }
        }
    ];

    public static readonly TCH5 = [
        {
            "start": "2019-01-23T15:00:00+00:00",
            "end": "2019-01-23T16:00:00+00:00",
            "text": "Class 8 &nbsp&nbsp&nbsp Science ",
            "color": "#de3d83",
            "data": { "class": "Class 8", "subject": "Science", "period": "PTCH5_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 8 &nbsp&nbsp&nbsp Science ",
            "color": "#f67944",
            "data": { "class": "Class 8", "subject": "Science", "period": "PTCH5_2" }
        }
    ];

    public static readonly APPU_TCH1 = {
        "msg": "You have covered the topics <b>Taste</b> and <b>Smell</b> in your previous period and the class performance is good in those topics. Do you want to conduct a quick test on those topics? Additionally, you can also start teaching the next topic <b>See</b>",
        "options": [
            {
                "command": "Conduct an Exam on the topics Taste and Smell",
                "msg": "Noted. Creating a package right away...",
                "index": '0'
            },
            {
                "command": "Teach the topic Smell",
                "msg": "How would you like to create a package?",
                "options": [
                    {
                        "command": "With Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index":'1,0'
                    },
                    {
                        "command": "Without Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index":'1,1'
                    }
                ]
            }
        ]
    };

    public static readonly APPU_TCH2 = {
        "msg": "You have covered the topics <b>Sun</b>, <b>Planets</b> and <b>Earth</b> in your previous period for this class and the class performance is not satisfactory. Practice material for these topics would help your students. Do you want me to create a package with practice material for these topics? Additionally, you can also start teaching the next topic <b>See</b>",
        "options": [
            {
                "command": "Create Practice Material for last class topics",
                "msg": "Add an assessment?",
                "index": '0',
                "options": [
                    {
                        "command": "Yes",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,0'
                    },
                    {
                        "command": "No",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,1'
                    }
                ]
            },
            {
                "command": "Teach the topic Moon",
                "msg": "How would you like to create a package?",
                "index": '1',
                "options": [
                    {
                        "command": "With Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '1,0'
                    },
                    {
                        "command": "Without Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '1,1'
                    }
                ]
            }
        ]
    };

    public static readonly APPU_TCH3 = {
        "msg": "The performance and engagement of your class in the previous period is not satisfactory. It will be helpful if you provide supplementary material for your students in the topic <b>Types of Birds</b>",
        "options": [
            {
                "command": "Get Supplementary Content for Types of Birds",
                "msg": "Do you also want to add an assessment to the package?",
                "index": '0',
                "options": [
                    {
                        "command": "Yes",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,0'
                    },
                    {
                        "command": "No",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,1'
                    }
                ]
            }
        ]
    };

    public static readonly APPU_TCH4 = {
        "msg": "Oops... Most of your students are absent for your previous class where you have covered the topic <b>Tropic of Cancer</b>. Do you want repeat the class? Alternatively, you can move ahead to the next topic <b>Tropic of capricorn</b>.",
        "options": [
            {
                "command": "Do you want to repeat the class?",
                "msg": "Do you want to repeat the class?",
                "index":'0',
                "options": [
                    {
                        "command": "Yes",
                        "msg": "How would you like to create a package?",
                        "index":'0,0',
                        "options": [
                            {
                                "command": "With Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index":'0,0,0'
                            },
                            {
                                "command": "Without Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index":'0,0,1'
                            }
                        ]
                    },
                    {
                        "command": "No, I will Teach the next topic",
                        "msg": "How would you like to create a package?",
                        "index":'1,0',
                        "options": [
                            {
                                "command": "With Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index":'1,1,0'
                            },
                            {
                                "command": "Without Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index":'1,1,1'
                            }
                        ]
                    }
                ]
            }
        ]
    };


    public static readonly APPU_TCH5 = {
        "msg": "You have covered the topics <b>Inertia</b> and <b>Mass</b> in your previous period. However, the attendance is very low and also the enagement & performance of the students who attended is not satisfactory. I strongly recommend you to repeat the class, this time along with additional material for each topic.",
        "options": [
            {
                "command": "Repeat the class",
                "msg": "How would you like to create a package?",
                "index": '0',
                "options": [
                    {
                        "command": "With Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,0'
                    },
                    {
                        "command": "Without Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,1'
                    }
                ]
            }
        ]
    };
}
