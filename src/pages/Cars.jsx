import { useDeferredValue, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Filter,
  Fuel,
  LayoutGrid,
  Search,
  SlidersHorizontal
} from "lucide-react";
import CatalogModelCard from "../components/CatalogModelCard";
import {
  automotiveBrands,
  automotiveCatalogModels,
  brandGroups,
  fuelTypeOptions,
  priceRangeOptions,
  vehicleTypeGroups,
  vehicleTypeTabs
} from "../utils/data";

const brandGroupCardLabels = {
  "Popular & Luxury Brands": "Popular / Luxury",
  "Luxury Brands": "Luxury",
  "Electric & Hybrid Brands": "EV / Hybrid",
  "Sports & Exotic Brands": "Sports / Exotic"
};

function Cars() {
  const [activeType, setActiveType] = useState("All");
  const [activeBrandId, setActiveBrandId] = useState("all");
  const [activeFuelType, setActiveFuelType] = useState("All Fuel Types");
  const [activePriceRange, setActivePriceRange] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearch = useDeferredValue(searchTerm);

  const selectedBrand = useMemo(
    () => automotiveBrands.find((brand) => brand.id === activeBrandId) || null,
    [activeBrandId]
  );

  const filteredCars = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();
    const selectedPriceRange =
      priceRangeOptions.find((option) => option.value === activePriceRange) ||
      priceRangeOptions[0];

    return automotiveCatalogModels.filter((model) => {
      const matchesBrand =
        activeBrandId === "all" ? true : model.brandId === activeBrandId;
      const matchesType =
        activeType === "All" ? true : model.types.includes(activeType);
      const matchesFuelType =
        activeFuelType === "All Fuel Types" ? true : model.fuelType === activeFuelType;
      const matchesPrice =
        model.estimatedPrice >= selectedPriceRange.min &&
        model.estimatedPrice < selectedPriceRange.max;
      const matchesQuery =
        query.length === 0
          ? true
          : [
              model.name,
              model.brand,
              model.displayName,
              model.fuelType,
              model.highlight,
              ...model.types
            ]
              .join(" ")
              .toLowerCase()
              .includes(query);

      return matchesBrand && matchesType && matchesFuelType && matchesPrice && matchesQuery;
    });
  }, [activeBrandId, activeFuelType, activePriceRange, activeType, deferredSearch]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="cars-page"
    >
      <section className="cars-hero-section">
        <div className="cars-hero-shell">
          <div className="cars-hero-layout">
            <div>
              <span className="cars-eyebrow">
                <LayoutGrid size={14} />
                Vehicle Catalog
              </span>
              <h1 className="cars-title">
                Browse brands, compare models
              </h1>
              <p className="cars-description">
                Use this catalog to narrow body style, fuel type, estimated price,
                and brand preference before requesting a physical inspection,
                availability check, or import quote from the DanAuto team.
              </p>
            </div>

            <div className="cars-filter-panel">
              <p className="cars-filter-panel-label">
                <Filter size={14} />
                Search + filters
              </p>

              <label className="cars-search-row">
                <Search size={16} className="cars-search-icon" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="cars-search-input"
                  placeholder="Search brand, model, type, or fuel"
                />
              </label>

              <div className="cars-filter-groups">
                <div>
                  <p className="cars-filter-group-title">
                    <Fuel size={13} />
                    Fuel type
                  </p>
                  <div className="cars-filter-chip-row">
                    {fuelTypeOptions.map((fuelType) => (
                      <button
                        key={fuelType}
                        type="button"
                        onClick={() => setActiveFuelType(fuelType)}
                        className={[
                          "filter-chip",
                          activeFuelType === fuelType
                            ? "filter-chip-active-blue"
                            : "filter-chip-idle"
                        ].join(" ")}
                      >
                        {fuelType}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="cars-filter-group-title">
                    <SlidersHorizontal size={13} />
                    Price range
                  </p>
                  <div className="cars-filter-chip-row">
                    {priceRangeOptions.map((range) => (
                      <button
                        key={range.value}
                        type="button"
                        onClick={() => setActivePriceRange(range.value)}
                        className={[
                          "filter-chip",
                          activePriceRange === range.value
                            ? "filter-chip-active-gold"
                            : "filter-chip-idle"
                        ].join(" ")}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cars-filter-block">
                <p className="cars-filter-group-title">Vehicle type</p>
                <div className="cars-type-chip-row">
                  {vehicleTypeTabs.slice(0, 10).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setActiveType(type)}
                      className={[
                        "filter-chip filter-chip-sm",
                        activeType === type
                          ? "filter-chip-active-gold"
                          : "filter-chip-idle"
                      ].join(" ")}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cars-brand-section">
        <div className="cars-brand-shell">
          <div className="cars-brand-group-row">
            {brandGroups.map((group) => (
              <div key={group.title} className="cars-brand-group-pill">
                {brandGroupCardLabels[group.title] || group.title}
              </div>
            ))}
          </div>

          <div className="cars-brand-grid">
            <motion.button
              type="button"
              onClick={() => setActiveBrandId("all")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={[
                "brand-card",
                activeBrandId === "all"
                  ? "brand-card-active-all"
                  : "brand-card-idle"
              ].join(" ")}
            >
              <p className="brand-card-label brand-card-label-gold">All Brands</p>
              <p className="brand-card-title">Full Market View</p>
              <p className="brand-card-description">Search across brands we can help source, compare, or inspect.</p>
            </motion.button>

            {brandGroups.flatMap((group) =>
              group.brands.map((brandName, index) => {
                const brand = automotiveBrands.find((entry) => entry.name === brandName);

                return (
                  <motion.button
                    key={brand.id}
                    type="button"
                    onClick={() => setActiveBrandId(brand.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ delay: index * 0.02 }}
                    className={[
                      "brand-card",
                      activeBrandId === brand.id
                        ? "brand-card-active"
                        : "brand-card-idle"
                    ].join(" ")}
                  >
                    <p className="brand-card-label brand-card-label-blue">
                      {brandGroupCardLabels[brand.group] || brand.group}
                    </p>
                    <p className="brand-card-title">{brand.name}</p>
                    <p className="brand-card-description">{brand.description}</p>
                    <p className="brand-card-footnote">
                      {brand.modelCount > 0
                        ? `${brand.modelCount} models available`
                        : "Brand profile ready"}
                    </p>
                  </motion.button>
                );
              })
            )}
          </div>
        </div>
      </section>

      <section className="cars-summary-section">
        <div className="cars-summary-panel">
          <div className="cars-summary-header">
            <div className="cars-summary-copy">
              <p className="cars-summary-eyebrow">
                {selectedBrand ? selectedBrand.name : "All Brands"}
              </p>
              <h2 className="cars-summary-title">
                {selectedBrand ? "Review matching models" : "Browse all shortlisted models"}
              </h2>
              <p className="cars-summary-description">
                {selectedBrand
                  ? selectedBrand.description
                  : "Prices are planning estimates. Confirm exact availability, condition, history, duties, and delivery timing with DanAuto before making a buying decision."}
              </p>
            </div>

            <div className="cars-summary-stats">
              <div className="cars-summary-stat">
                <p className="cars-summary-stat-label">Matching models</p>
                <p className="cars-summary-stat-value cars-summary-stat-value-lg">{filteredCars.length}</p>
              </div>

              <div className="cars-summary-stat">
                <p className="cars-summary-stat-label">Fuel profile</p>
                <p className="cars-summary-stat-value">{activeFuelType}</p>
              </div>

              <div className="cars-summary-stat">
                <p className="cars-summary-stat-label">Price band</p>
                <p className="cars-summary-stat-value">
                  {priceRangeOptions.find((range) => range.value === activePriceRange)?.label}
                </p>
              </div>
            </div>
          </div>

          <div className="cars-summary-chip-row">
            {vehicleTypeTabs.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={[
                  "filter-chip filter-chip-sm",
                  activeType === type
                    ? "filter-chip-active-gold"
                    : "filter-chip-idle"
                ].join(" ")}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="cars-type-groups-grid">
            {vehicleTypeGroups.map((group) => (
              <div key={group.title} className="cars-type-group-card">
                <p className="cars-type-group-title">{group.title}</p>
                <p className="cars-type-group-description">{group.types.join(" • ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cars-results-section">
        <div className="cars-results-shell">
          {filteredCars.length > 0 ? (
            <div className="cars-results-grid">
              {filteredCars.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CatalogModelCard model={model} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="cars-empty-state">
              <p className="cars-empty-eyebrow">No matching models</p>
              <h3 className="cars-empty-title">Try another brand, type, fuel profile, or price band.</h3>
              <p className="cars-empty-description">
                Try widening the price band, clearing the search field, or choosing
                all fuel types if you want the team to suggest close alternatives.
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.main>
  );
}

export default Cars;
