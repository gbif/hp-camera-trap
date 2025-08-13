/*
This is the file in which you configure the data widgets.
See: https://hp-theme.gbif-staging.org/data-exploration-config
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "DATASET"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": "#001972",
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "equals",
      "key": "protocol",
      "value": "CAMTRAP_DP"
    },
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "country",
      "geometry",
      "eventDate",
      "lifeStage",
      "sex",
      "identifiedBy",
      "mediaType",
      "datasetKey",
      "publishingOrg"
    ],
    "excludedFilters": [
      // RECORD
      "basisOfRecord", // MachineObservation for all
      "collectionKey",
      // "collectionCode",
      // "datasetId",
      // "datasetName",
      "institutionKey",
      "institutionCode",
      // "license",
      
      // OCCURRENCE
      "catalogNumber",
      "degreeOfEstablishment",
      "establishmentMeans",
      // "lifeStage",
      // "mediaType",
      // "occurrenceId",
      // "occurrenceStatus",
      // "organismQuantity", TODO: Why are there no data?
      "organismQuantityType",
      "pathway",
      "recordNumber",
      "recordedBy",
      "recordedById",
      "relativeOrganismQuantity",
      // "sex",

      // ORGANISM
      // "organismID",
      "previousIdentifications",

      // MATERIAL ENTITY
      "associatedSequences", // TODO: ?
      "preparations",
      
      // EVENT
      // "endDayOfYear",
      // "eventId",
      // "eventDate",
      "fieldNumber",
      // "month",
      "sampleSizeUnit",
      "sampleSizeValue",
      // "samplingProtocol",
      // "startDayOfYear",
      "year",

      // LOCATION
      // "gadmGid",
      // "continent",
      // "coordinateUncertaintyInMeters",
      // "country",
      // "depth",
      // "distanceFromCentroidInMeters",
      // "elevation",
      "georeferencedBy",
      // "gbifRegion",
      "higherGeography",
      "island",
      "islandGroup",
      // "locality",
      // "location",
      // "publishedByGbifRegion",
      "stateProvince",
      "waterBody",

      // GEOLOGICAL CONTEXT
      "biostratigraphy",
      "geologicalTime",
      "lithostratigraphy",

      // IDENTIFICATION
      // "identifiedBy",
      "identifiedById",
      "typeStatus",
      // "verbatimScientificName",
      
      // TAXON
      // "taxonKey",
      "taxonId",
      
      // PROVENANCE
      // "datasetKey",
      // "hostingOrganizationKey",
      // "networkKey",
      // "programme",
      // "projectId",
      // "publishingOrg",
      // "publishingCountry",
      // "protocol",
      // "repatriated",

      // OTHER
      // "dwcaExtension",
      // "gbifId",
      // "isInCluster",
      "iucnRedListCategory",
      "isSequenced"
      // "issue",
      // "lastInterpreted",
      // "taxonomicIssue",
      // "q"
    ],
    "availableTableColumns": [
      "scientificName",
      "commonName",
      "media",
      "country",
      "coordinates",
      "locality",
      "eventDate",
      "year",
      "individualCount",
      "lifeStage",
      "sex",
      "identifiedBy",
      "datasetKey",
      "publishingOrg",
      "collectionCode"
      // "basisOfRecord",
      // "catalogNumber",
      // "collectionKey",
      // "establishmentMeans",
      // "features",
      // "fieldNumber",
      // "higherGeography",
      // "institutionCode",
      // "institutionKey",
      // "iucnRedListCategory",
      // "preparations",
      // "recordedBy",
      // "recordNumber",
      // "specimenTriplet",
      // "stateProvince",
      // "typeStatus",
    ],
    "defaultEnabledTableColumns": [
      "scientificName",
      "commonName",
      "media",
      "country",
      "eventDate",
      "collectionCode"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      // "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 30,
      "lng": 0,
      "zoom": 2
    }
  },
  "datasetSearch": {
    scope: {
      endpointType: ["CAMTRAP_DP"]
    },
    highlightedFilters: ["q", "publishingCountry", "publishingOrg"],
    excludedFilters: ["type"]
    // More filters: "dwcaExtension", "hostingOrg", "license", "networkKey", "projectId"
  },
  "publisherSearch": {},
}