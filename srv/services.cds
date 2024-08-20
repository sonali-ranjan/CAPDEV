
using from '@sap/cds-common-content';
using { db } from '../db/schema';

extend db.Books with {
    virtual inStock : Boolean;
}

service BooksService {
    entity Books as projection on db.Books;
    annotate Books with @odata.draft.enabled;
    
}
