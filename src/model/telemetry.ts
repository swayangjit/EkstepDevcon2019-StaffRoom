export interface Telemetry{
        eid: string,
        ets: number,
        did: number,
        visitorId: string, // Visitor Id
        visitorName: string, // Visitor Name
        ideaId: string,
        teacherId:string,
        stallId: string, //Stall unique id
        stallName: string, //Stall Name - CLASSROOM, STAFFROOM, HOME
        edata: EData,
        classroomId?: string, // Present only if stallId=CLASSROOM
        school?: string, // School Name
        district?: string, // District Name
        period?: string,
        topics?: string[], // Topics covered by teacher
        subject?: string, // Teacher specific subject
        grade?: string, // Teacher specific grade 
        content?: any,
       
    
}

export interface Interact{
        eid: string,
        ets: number,
        ver: string,
        context:{}
}

export interface CData{
        type: string,
        id:string
}
export interface EData{
        type: string, //app,portal,staffroom,classroom
        mode: string //play/edit
}