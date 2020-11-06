import { HttpParams } from '@angular/common/http';

const allowedQueryParams = [
  'skip',
  'take',
  'requireTotalCount',
  'requireGroupCount',
  'sort',
  'filter',
  'totalSummary',
  'group',
  'groupSummary',
];

export const queryBuilder = (loadOptions): HttpParams => {
  let httpParams: HttpParams = new HttpParams();

  for (const param of allowedQueryParams) {
    if (param in loadOptions && !!loadOptions[param]) {
      httpParams = httpParams.set(param, JSON.stringify(loadOptions[param]));
    }
  }

  return httpParams;
};
