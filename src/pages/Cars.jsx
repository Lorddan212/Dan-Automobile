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
      className="pb-12 pt-28 sm:pt-32"
    >
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-0 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
                <LayoutGrid size={14} />
                DanAuto Cars
              </span>
              <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
                Browse brands, compare models, and filter the future of mobility.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                Explore global automotive brands in a premium DanAuto catalog with
                curated pricing in Naira, EV highlights, body-style filters, fuel
                profiles, and a fast search experience built for modern discovery.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-black/20 p-6 shadow-luxury">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-luxury-gold">
                <Filter size={14} />
                Search + filters
              </p>

              <label className="mt-4 flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                <Search size={16} className="text-white/45" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30"
                  placeholder="Search brand, model, type, or fuel"
                />
              </label>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                    <Fuel size={13} />
                    Fuel type
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {fuelTypeOptions.map((fuelType) => (
                      <button
                        key={fuelType}
                        type="button"
                        onClick={() => setActiveFuelType(fuelType)}
                        className={[
                          "rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition",
                          activeFuelType === fuelType
                            ? "border-luxury-blue bg-luxury-blue/10 text-white"
                            : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                        ].join(" ")}
                      >
                        {fuelType}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                    <SlidersHorizontal size={13} />
                    Price range
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {priceRangeOptions.map((range) => (
                      <button
                        key={range.value}
                        type="button"
                        onClick={() => setActivePriceRange(range.value)}
                        className={[
                          "rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition",
                          activePriceRange === range.value
                            ? "border-luxury-gold bg-luxury-gold/10 text-white"
                            : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                        ].join(" ")}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Vehicle type
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {vehicleTypeTabs.slice(0, 10).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setActiveType(type)}
                      className={[
                        "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition",
                        activeType === type
                          ? "border-luxury-gold bg-luxury-gold/10 text-white"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
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

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex flex-wrap gap-3">
            {brandGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/55"
              >
                {group.title}
              </div>
            ))}
          </div>

          <div className="grid gap-4 xl:grid-cols-4">
            <motion.button
              type="button"
              onClick={() => setActiveBrandId("all")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={[
                "rounded-[28px] border p-5 text-left transition",
                activeBrandId === "all"
                  ? "border-luxury-gold bg-luxury-gold/10"
                  : "border-white/10 bg-white/[0.04] hover:border-white/20"
              ].join(" ")}
            >
              <p className="text-xs uppercase tracking-[0.26em] text-luxury-gold">All Brands</p>
              <p className="mt-3 font-display text-2xl uppercase text-white">Global Catalog</p>
              <p className="mt-2 text-sm leading-7 text-white/58">
                Search across every integrated brand and model.
              </p>
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
                      "rounded-[28px] border p-5 text-left transition",
                      activeBrandId === brand.id
                        ? "border-luxury-gold bg-white/[0.08]"
                        : "border-white/10 bg-white/[0.04] hover:border-white/20"
                    ].join(" ")}
                  >
                    <p className="text-[10px] uppercase tracking-[0.24em] text-luxury-blue">
                      {brand.group}
                    </p>
                    <p className="mt-3 font-display text-2xl uppercase text-white">{brand.name}</p>
                    <p className="mt-2 text-sm leading-7 text-white/58">{brand.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-luxury-gold">
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

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.28em] text-luxury-gold">
                {selectedBrand ? selectedBrand.name : "All Brands"}
              </p>
              <h2 className="mt-3 font-display text-3xl uppercase text-white sm:text-4xl">
                {selectedBrand ? "Click to view models" : "Browse all available models"}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {selectedBrand
                  ? selectedBrand.description
                  : "Use the brand cards, type tabs, fuel choices, price ranges, and search field together to narrow the catalog quickly."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                  Matching models
                </p>
                <p className="mt-2 font-display text-3xl uppercase text-white">
                  {filteredCars.length}
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                  Fuel profile
                </p>
                <p className="mt-2 font-display text-xl uppercase text-white">
                  {activeFuelType}
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                  Price band
                </p>
                <p className="mt-2 font-display text-xl uppercase text-white">
                  {priceRangeOptions.find((range) => range.value === activePriceRange)?.label}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {vehicleTypeTabs.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={[
                  "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition",
                  activeType === type
                    ? "border-luxury-gold bg-luxury-gold/10 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                ].join(" ")}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {vehicleTypeGroups.map((group) => (
              <div key={group.title} className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-luxury-blue">{group.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/58">{group.types.join(" • ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredCars.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-3">
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
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 text-center shadow-luxury">
              <p className="text-xs uppercase tracking-[0.28em] text-luxury-gold">
                No matching models
              </p>
              <h3 className="mt-4 font-display text-3xl uppercase text-white">
                Try another brand, type, fuel profile, or price band.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                The catalog is now grouped by brand and model family, so small filter
                changes can quickly surface a very different part of the market.
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.main>
  );
}

export default Cars;
