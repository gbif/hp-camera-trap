/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
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
    // TODO: you should remove types you do not want to use
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
  "datasetSearch": {
    scope: {
      endpointType: ["CAMTRAP_DP"]
    },
    highlightedFilters: ["q", "publishingCountry", "publishingOrg"],
    excludedFilters: ["type"]
    // More filters: "dwcaExtension", "hostingOrg", "license", "networkKey", "projectId"
  },
  "occurrenceSearch": {
    "scope": {
      "type": "equals",
      "key": "protocol",
      "value": "CAMTRAP_DP"
    },
    "highlightedFilters": [
      "taxonKey",
      "country",
      "geometry",
      "eventDate",
      "datasetKey",
      "lifeStage",
      "sex",
      "identifiedBy",
      "mediaType"
    ],
    "excludedFilters": [
      // Record
      "basisOfRecord", // MachineObservation for all
      "collectionKey",
      "institutionKey",
      "institutionCode",
      // Occurrence
      "catalogNumber",
      "degreeOfEstablishment",
      "establishmentMeans",
      // "organismQuantity" // Why are there no data?
      "organismQuantityType",
      "pathway",
      "recordNumber",
      "recordedBy",
      "recordedByID",
      "relativeOrganismQuantity",
      // Organism
      "previousIdentifications",
      // Material Entity
      "associatedSequences",
      "preparations",
      // Event
      "fieldNumber",
      "sampleSizeUnit",
      "sampleSizeValue",
      // Location
      "georeferencedBy",
      "higherGeography",
      "island",
      "islandGroup",
      "stateProvince",
      "waterBody",
      // Geological Context
      "biostratigraphy",
      "geologicalTime",
      "lithostratigraphy",
      // Identification
      "identifiedByID",
      "typeStatus",
      "verbatimScientificName",
      // Taxon
      "taxonId",
      // Provenance
      // Other
      "isSequenced"
    ],
    "availableTableColumns": [
      "commonName", // TODO: does not show
      "features",
      "country",
      "eventDate", // TODO: does not show
      "dataset", // TODO: does not show
      "lifeStage", // TODO: does not show
      "sex", // TODO: does not show
      "media", // TODO: does not show
      "collectionCode", // TODO: does not show
      "identifiedBy"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 52,
      "lng": 12,
      "zoom": 4.911544076366507
    }
  },
  "publisherSearch": {},
}