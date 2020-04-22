import { FC } from 'react';
import { Users } from './../seeds/OrgChart.model';
import '../../scss/_orgchart.scss';
export interface OrgChartProps {
    Users: Users;
    handleClick: (value: string | undefined) => void;
}
export declare const OrgChart: FC<OrgChartProps>;
//# sourceMappingURL=orgChart.d.ts.map