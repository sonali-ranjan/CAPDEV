namespace db;

using {cuid, managed, Country} from '@sap/cds/common';

entity Books : cuid, managed {
        Key ID: UUID;
        booksAvailable: Int16;
        title: String;
        publishedIn: Country
    };