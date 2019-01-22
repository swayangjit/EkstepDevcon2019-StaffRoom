export interface Telemetry{
        eid: string,
        ets: number,
        did: number,
        visitorId: string, // Visitor Id
        visitorName: string, // Visitor Name
        profileId: string,
        profileType: string, // STUDENT/TEACHER/PARENT
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

export interface EData{
        type: string, //app,portal,staffroom,classroom
        mode: string //play/edit
}