export class TeacherRequestConstnats {
    public static readonly TCH1_REQUEST_CONST = [
        {
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Taste", "Smell"],
                    "keywords": ["dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },
        [{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["See"],
                    "keywords": ["dc_primary", "dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },
        {
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["See"],
                    "keywords": ["dc_primary"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        }]
    ];
    public static readonly TCH2_REQUEST_CONST = [
        [{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Sun", "Planets", "Earth"],
                    "keywords": ["dc_practise", "dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Sun", "Planets", "Earth"],
                    "keywords": ["dc_practise"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        }],
        [{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["See"],
                    "keywords": ["dc_primary", "dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["See"],
                    "keywords": ["dc_primary"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        }]
    ];
    public static readonly TCH3_REQUEST_CONST = [
        {
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Types of Birds"],
                    "keywords": ["dc_secondary", "dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Types of Birds"],
                    "keywords": ["dc_secondary"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        }];
    public static readonly TCH4_REQUEST_CONST = [
        [{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Tropic of Cancer"],
                    "keywords": ["dc_primary", "dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Tropic of Cancer"],
                    "keywords": ["dc_primary"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        }],[{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Inertia"],
                    "keywords": ["dc_primary", "dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Inertia"],
                    "keywords": ["dc_primary"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        }]
    ];
    public static readonly TCH5_REQUEST_CONST = [
        {
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Inertia", "Mass"],
                    "keywords": ["dc_primary", "dc_assessment"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        },{
            "request": { 
                "filters":{
                    "objectType": "Content",
                    "topic": ["Inertia", "Mass"],
                    "keywords": ["dc_primary"],
                    "status":[]
                },
                "limit":5,
                "fields" :["identifier"],
                "sort_by":{"lastUpdatedOn":"desc"}
                
            }
        }
    ]
}
