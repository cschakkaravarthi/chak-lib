import { FC } from 'react';
import { Category } from '../interfaces';
export interface ArticleCardFullProps {
    imageUrl?: string;
    title: string;
    subtitle?: string;
    content?: JSX.Element;
    date?: string;
    categories?: Category[];
}
export declare const ArticleCardFull: FC<ArticleCardFullProps>;
//# sourceMappingURL=articleCardFull.d.ts.map