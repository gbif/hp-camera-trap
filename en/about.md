---
layout: heroImage
klass: wildlabs
lang-ref: about
permalink: about
title: About
background: "{{ site.data.images.fox.src }}"
imageLicense: "{{ site.data.images.fox.caption }}"
height: 60vh
parallax: true
toc: true
---

Wild Album highlights camera trap data published through the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org). It allows users to find data that might fit their need and allows datasets owners to make their research more discoverable. All data use is subject to the [GBIF user agreement](https://www.gbif.org/terms/data-user).

## Scope

Any dataset that is published as a [Camera Trap Data Package (Camtrap DP)](https://camtrap-dp.tdwg.org) and is registered with GBIF is automatically included in Wild Album. Publication and registration can be do through e.g. a [GBIF IPT](https://www.gbif.org/ipt).

### API access

- Datasets: <https://api.gbif.org/v1/dataset/search?endpointType=CAMTRAP_DP>
- Occurrences: <https://api.gbif.org/v1/occurrence/search?protocol=CAMTRAP_DP>

See the [GBIF API documentation](https://techdocs.gbif.org/en/openapi/) for details.

## Who's behind this?

The idea for this website was suggested by partners of the [BIG_PICTURE](https://wildlifecamera.eu) project. It is hosted by [GBIF](https://www.gbif.org/hosted-portals) and maintained by [WILDLABS](https://wildlabs.net) and volunteers from the camera-trapping community, in particular:

- [Peter Desmet](https://orcid.org/0000-0002-8442-8025)
- [Francesca Cagnacci](https://orcid.org/0000-0002-4954-9980)
- [Fabiola Iannarilli](https://orcid.org/0000-0002-7018-3557)
- [Talia Speaker](https://orcid.org/0000-0002-1274-2330)

## How can you contribute?

The best way to contribute to Wild Album is by publishing your camera trap data to GBIF. We hope to add more detailed instructions later, but see the [publication guide](https://doi.org/10.35035/doc-0qzp-2x37) to get started.

Have a suggestion or noticed a typo or bug? Submit an issue on [GitHub](https://github.com/gbif/hp-wild-album/issues).

<!-- Want get in touch? [Contact us](info@gbif.org) -->
