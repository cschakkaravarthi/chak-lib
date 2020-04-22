export interface Users {
    manager: Manager;
    user: Manager;
    subordinates: Manager[];
}
export interface Manager {
    email?: string;
    name: string;
    title?: string;
}
export declare const dummyManager: Manager;
export declare const dummyUser: Manager;
export declare const dummyUsers: Users;
//# sourceMappingURL=OrgChart.model.d.ts.map