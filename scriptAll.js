const questions = [
    // Script 1
    // 1
    {
        question: "Which of the following is an abiotic component of an ecosystem?",
        answers: [
            { text: "Fungi", correct: false },
            { text: "Water", correct: true },
            { text: "Fish", correct: false },
            { text: "Trees", correct: false }
        ]
    },
    // 2
    {
        question: "Which of the following is a secondary consumer?",
        answers: [
            { text: "Grass", correct: false },
            { text: "Rabbit", correct: false },
            { text: "Fox", correct: true },
            { text: "Grasshopper", correct: false }
        ]
    },
    // 3
    {
        question: "Which process converts atmospheric nitrogen into a usable form for plants?",
        answers: [
            { text: "Denitrification", correct: false },
            { text: "Nitrogen fixation", correct: true },
            { text: "Nitrification", correct: false },
            { text: "Ammonification", correct: false }
        ]
    },
    // 4
    {
        question: "In which layer of the atmosphere do most weather events occur?",
        answers: [
            { text: "Stratosphere", correct: false },
            { text: "Mesosphere", correct: false },
            { text: "Troposphere", correct: true },
            { text: "Thermosphere", correct: false }
        ]
    },
    // 5
    {
        question: "Which of the following is a characteristic of a desert biome?",
        answers: [
            { text: "High rainfall", correct: false },
            { text: "Low temperatures", correct: false },
            { text: "High biodiversity", correct: false },
            { text: "Low humidity", correct: true }
        ]
    },
    // 6
    {
        question: "Which of these is a greenhouse gas?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    // 7
    {
        question: "What is the primary source of energy for the Earth?",
        answers: [
            { text: "Geothermal energy", correct: false },
            { text: "Wind energy", correct: false },
            { text: "Solar energy", correct: true },
            { text: "Nuclear energy", correct: false }
        ]
    },
    // 8
    {
        question: "What percentage of the Earth's surface is covered by water?",
        answers: [
            { text: "50%", correct: false },
            { text: "70%", correct: true },
            { text: "80%", correct: false },
            { text: "90%", correct: false }
        ]
    },
    // 9
    {
        question: "Which of the following ecosystems has the highest biodiversity?",
        answers: [
            { text: "Desert", correct: false },
            { text: "Tundra", correct: false },
            { text: "Tropical rainforest", correct: true },
            { text: "Temperate forest", correct: false }
        ]
    },
    // 10
    {
        question: "What is the term for a species that has a disproportionately large effect on its environment?",
        answers: [
            { text: "Invasive species", correct: false },
            { text: "Keystone species", correct: true },
            { text: "Endangered species", correct: false },
            { text: "Threatened species", correct: false }
        ]
    },

    // Script 2
    // 1
    {
        question: "Which of the following is NOT a characteristic of living organisms?",
        answers: [
            { text: "Growth", correct: false },
            { text: "Reproduction", correct: false },
            { text: "Homeostasis", correct: false },
            { text: "Inability to adapt", correct: true }
        ]
    },
    // 2
    {
        question: "What is the basic unit of life?",
        answers: [
            { text: "Atom", correct: false },
            { text: "Cell", correct: true },
            { text: "Tissue", correct: false },
            { text: "Organ", correct: false }
        ]
    },
    // 3
    {
        question: "Which of the following processes produces the most ATP?",
        answers: [
            { text: "Fermentation", correct: false },
            { text: "Glycolysis", correct: false },
            { text: "Electron transport chain", correct: true },
            { text: "Krebs cycle", correct: false }
        ]
    },
    // 4
    {
        question: "What is the main function of ribosomes?",
        answers: [
            { text: "Energy production", correct: false },
            { text: "Protein synthesis", correct: true },
            { text: "DNA replication", correct: false },
            { text: "Cell division", correct: false }
        ]
    },
    // 5
    {
        question: "Which of the following is a prokaryotic cell?",
        answers: [
            { text: "Plant cell", correct: false },
            { text: "Animal cell", correct: false },
            { text: "Bacterial cell", correct: true },
            { text: "Fungal cell", correct: false }
        ]
    },
    // 6
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Chloroplast", correct: false },
            { text: "Endoplasmic reticulum", correct: false }
        ]
    },
    // 7
    {
        question: "Which of the following is a type of mutation?",
        answers: [
            { text: "Insertion", correct: true },
            { text: "Translation", correct: false },
            { text: "Transcription", correct: false },
            { text: "Replication", correct: false }
        ]
    },
    // 8
    {
        question: "What is the term for a trait that is controlled by multiple genes?",
        answers: [
            { text: "Polygenic trait", correct: true },
            { text: "Monogenic trait", correct: false },
            { text: "Epistatic trait", correct: false },
            { text: "Pleiotropic trait", correct: false }
        ]
    },
    // 9
    {
        question: "Which structure in the cell is responsible for regulating what enters and leaves the cell?",
        answers: [
            { text: "Cell wall", correct: false },
            { text: "Cell membrane", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Cytoplasm", correct: false }
        ]
    },
    // 10
    {
        question: "What is the process by which plants convert sunlight into chemical energy?",
        answers: [
            { text: "Photosynthesis", correct: true },
            { text: "Respiration", correct: false },
            { text: "Fermentation", correct: false },
            { text: "Transpiration", correct: false }
        ]
    },

    // Script 3
    // 1
    {
        question: "Which of the following is NOT a greenhouse gas?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Methane", correct: false },
            { text: "Ozone", correct: false },
            { text: "Oxygen", correct: true }
        ]
    },
    // 2
    {
        question: "What is the largest source of methane emissions?",
        answers: [
            { text: "Landfills", correct: false },
            { text: "Agriculture", correct: true },
            { text: "Transportation", correct: false },
            { text: "Energy production", correct: false }
        ]
    },
    // 3
    {
        question: "Which gas is released during photosynthesis?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Methane", correct: false }
        ]
    },
    // 4
    {
        question: "What is the main contributor to ocean acidification?",
        answers: [
            { text: "Plastic pollution", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Heavy metals", correct: false },
            { text: "Nutrients", correct: false }
        ]
    },
    // 5
    {
        question: "Which of the following is a renewable energy source?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Natural gas", correct: false },
            { text: "Solar energy", correct: true },
            { text: "Nuclear energy", correct: false }
        ]
    },
    // 6
    {
        question: "Which international agreement aimed at reducing greenhouse gas emissions was adopted in 1997?",
        answers: [
            { text: "Kyoto Protocol", correct: true },
            { text: "Paris Agreement", correct: false },
            { text: "Montreal Protocol", correct: false },
            { text: "Copenhagen Accord", correct: false }
        ]
    },
    // 7
    {
        question: "What is the primary purpose of the Montreal Protocol?",
        answers: [
            { text: "Reduce carbon emissions", correct: false },
            { text: "Phase out ozone-depleting substances", correct: true },
            { text: "Combat climate change", correct: false },
            { text: "Promote renewable energy", correct: false }
        ]
    },
    // 8
    {
        question: "What is the term for the gradual increase in the Earth's average temperature?",
        answers: [
            { text: "Global warming", correct: true },
            { text: "Climate change", correct: false },
            { text: "Greenhouse effect", correct: false },
            { text: "Ozone depletion", correct: false }
        ]
    },
    // 9
    {
        question: "Which of the following is a consequence of climate change?",
        answers: [
            { text: "Increased biodiversity", correct: false },
            { text: "More frequent extreme weather events", correct: true },
            { text: "Stable temperatures", correct: false },
            { text: "Decreased sea levels", correct: false }
        ]
    },
    // 10
    {
        question: "What is the primary greenhouse gas emitted by human activities?",
        answers: [
            { text: "Methane", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Nitrous oxide", correct: false },
            { text: "Ozone", correct: false }
        ]
    },

    // Script 4
    // 1
    {
        question: "What is biodiversity?",
        answers: [
            { text: "Variety of life in the world", correct: true },
            { text: "Number of species in a given area", correct: false },
            { text: "Study of ecosystems", correct: false },
            { text: "Amount of carbon in the atmosphere", correct: false }
        ]
    },
    // 2
    {
        question: "Which of the following is a major threat to biodiversity?",
        answers: [
            { text: "Conservation", correct: false },
            { text: "Deforestation", correct: true },
            { text: "Pollution control", correct: false },
            { text: "Sustainable practices", correct: false }
        ]
    },
    // 3
    {
        question: "What is an endangered species?",
        answers: [
            { text: "A species with a stable population", correct: false },
            { text: "A species at risk of extinction", correct: true },
            { text: "A species that is invasive", correct: false },
            { text: "A species that is abundant", correct: false }
        ]
    },
    // 4
    {
        question: "What is the term for the loss of a species from an ecosystem?",
        answers: [
            { text: "Extinction", correct: true },
            { text: "Endangerment", correct: false },
            { text: "Overexploitation", correct: false },
            { text: "Biodiversity loss", correct: false }
        ]
    },
    // 5
    {
        question: "Which of the following is a benefit of biodiversity?",
        answers: [
            { text: "Increased vulnerability to diseases", correct: false },
            { text: "Improved ecosystem resilience", correct: true },
            { text: "Reduced food security", correct: false },
            { text: "Loss of cultural heritage", correct: false }
        ]
    },
    // 6
    {
        question: "Which of the following is a biodiversity hotspot?",
        answers: [
            { text: "Amazon rainforest", correct: true },
            { text: "Sahara desert", correct: false },
            { text: "Arctic tundra", correct: false },
            { text: "Great Plains", correct: false }
        ]
    },
    // 7
    {
        question: "Which of the following is a cause of habitat destruction?",
        answers: [
            { text: "Urban development", correct: true },
            { text: "Wildlife conservation", correct: false },
            { text: "Sustainable agriculture", correct: false },
            { text: "Ecotourism", correct: false }
        ]
    },
    // 8
    {
        question: "What is the main goal of conservation biology?",
        answers: [
            { text: "To increase species extinction", correct: false },
            { text: "To protect biodiversity", correct: true },
            { text: "To promote overexploitation", correct: false },
            { text: "To reduce habitat preservation", correct: false }
        ]
    },
    // 9
    {
        question: "Which of the following is a non-renewable resource?",
        answers: [
            { text: "Solar energy", correct: false },
            { text: "Wind energy", correct: false },
            { text: "Coal", correct: true },
            { text: "Biomass", correct: false }
        ]
    },
    // 10
    {
        question: "What is an invasive species?",
        answers: [
            { text: "A native species that is threatened", correct: false },
            { text: "A species that spreads aggressively in a new habitat", correct: true },
            { text: "A species that is extinct", correct: false },
            { text: "A species that is highly adapted to its environment", correct: false }
        ]
    },

    // Script 5
    // 1
    {
        question: "What is the primary cause of ocean acidification?",
        answers: [
            { text: "Nutrient runoff", correct: false },
            { text: "Plastic pollution", correct: false },
            { text: "Increased carbon dioxide absorption", correct: true },
            { text: "Heavy metal pollution", correct: false }
        ]
    },
    // 2
    {
        question: "What is the primary function of mangroves?",
        answers: [
            { text: "Increase water salinity", correct: false },
            { text: "Provide habitat for wildlife", correct: true },
            { text: "Reduce coastal erosion", correct: true },
            { text: "Improve air quality", correct: false }
        ]
    },
    // 3
    {
        question: "Which of the following is a method of water conservation?",
        answers: [
            { text: "Watering plants at noon", correct: false },
            { text: "Using low-flow fixtures", correct: true },
            { text: "Leaving the tap running", correct: false },
            { text: "Taking long showers", correct: false }
        ]
    },
    // 4
    {
        question: "What is the primary source of freshwater on Earth?",
        answers: [
            { text: "Rivers", correct: false },
            { text: "Glaciers", correct: true },
            { text: "Lakes", correct: false },
            { text: "Atmosphere", correct: false }
        ]
    },
    // 5
    {
        question: "What is the term for the process by which plants release water vapor into the atmosphere?",
        answers: [
            { text: "Transpiration", correct: true },
            { text: "Evaporation", correct: false },
            { text: "Condensation", correct: false },
            { text: "Precipitation", correct: false }
        ]
    },
    // 6
    {
        question: "Which of the following is a consequence of deforestation?",
        answers: [
            { text: "Increased biodiversity", correct: false },
            { text: "Reduced carbon emissions", correct: false },
            { text: "Habitat loss", correct: true },
            { text: "Improved soil quality", correct: false }
        ]
    },
    // 7
    {
        question: "Which of the following best describes sustainable development?",
        answers: [
            { text: "Meeting current needs without compromising future generations", correct: true },
            { text: "Maximizing short-term profits", correct: false },
            { text: "Ignoring environmental concerns", correct: false },
            { text: "Exploiting natural resources", correct: false }
        ]
    },
    // 8
    {
        question: "What is the largest terrestrial biome?",
        answers: [
            { text: "Tropical rainforest", correct: false },
            { text: "Desert", correct: false },
            { text: "Taiga", correct: true },
            { text: "Grassland", correct: false }
        ]
    },
    // 9
    {
        question: "Which of the following is a major component of the water cycle?",
        answers: [
            { text: "Condensation", correct: true },
            { text: "Combustion", correct: false },
            { text: "Decomposition", correct: false },
            { text: "Photosynthesis", correct: false }
        ]
    },
    // 10
    {
        question: "Which of the following is NOT a renewable resource?",
        answers: [
            { text: "Wind energy", correct: false },
            { text: "Solar energy", correct: false },
            { text: "Natural gas", correct: true },
            { text: "Biomass", correct: false }
        ]
    },

    // Script 6
    // 1
    {
        question: "What is the main component of the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    // 2
    {
        question: "Which of the following gases is primarily responsible for ozone depletion?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Chlorofluorocarbons (CFCs)", correct: true },
            { text: "Methane", correct: false },
            { text: "Nitrous oxide", correct: false }
        ]
    },
    // 3
    {
        question: "What is the primary source of ocean pollution?",
        answers: [
            { text: "Plastic waste", correct: true },
            { text: "Heavy metals", correct: false },
            { text: "Oil spills", correct: false },
            { text: "Sewage", correct: false }
        ]
    },
    // 4
    {
        question: "Which of the following is a non-renewable resource?",
        answers: [
            { text: "Wind energy", correct: false },
            { text: "Solar energy", correct: false },
            { text: "Natural gas", correct: true },
            { text: "Hydropower", correct: false }
        ]
    },
    // 5
    {
        question: "What is the main goal of environmental policy?",
        answers: [
            { text: "To protect the environment and human health", correct: true },
            { text: "To promote industrial growth", correct: false },
            { text: "To limit public participation", correct: false },
            { text: "To reduce government regulations", correct: false }
        ]
    },
    // 6
    {
        question: "Which of the following is an example of a biome?",
        answers: [
            { text: "Ocean", correct: true },
            { text: "Lake", correct: false },
            { text: "River", correct: false },
            { text: "Soil", correct: false }
        ]
    },
    // 7
    {
        question: "What is the term for the gradual change in species composition of a community over time?",
        answers: [
            { text: "Succession", correct: true },
            { text: "Evolution", correct: false },
            { text: "Extinction", correct: false },
            { text: "Migration", correct: false }
        ]
    },
    // 8
    {
        question: "Which of the following is a consequence of urbanization?",
        answers: [
            { text: "Increased habitat for wildlife", correct: false },
            { text: "Increased air pollution", correct: true },
            { text: "Decreased water usage", correct: false },
            { text: "Improved biodiversity", correct: false }
        ]
    },
    // 9
    {
        question: "What is the term for a species that is found only in one specific habitat?",
        answers: [
            { text: "Endemic species", correct: true },
            { text: "Invasive species", correct: false },
            { text: "Keystone species", correct: false },
            { text: "Indicator species", correct: false }
        ]
    },
    // 10
    {
        question: "Which of the following is a renewable energy source?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Natural gas", correct: false },
            { text: "Wind", correct: true },
            { text: "Uranium", correct: false }
        ]
    },

    // Script 7
    // 1
    {
        question: "What is the primary cause of the greenhouse effect?",
        answers: [
            { text: "Deforestation", correct: false },
            { text: "Carbon emissions", correct: true },
            { text: "Ocean currents", correct: false },
            { text: "Solar radiation", correct: false }
        ]
    },
    // 2
    {
        question: "Which of the following is a renewable resource?",
        answers: [
            { text: "Natural gas", correct: false },
            { text: "Geothermal energy", correct: true },
            { text: "Coal", correct: false },
            { text: "Nuclear energy", correct: false }
        ]
    },
    // 3
    {
        question: "What is the primary source of nitrogen in the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon dioxide", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    // 4
    {
        question: "Which of the following is a method of waste management?",
        answers: [
            { text: "Landfilling", correct: false },
            { text: "Recycling", correct: true },
            { text: "Incineration", correct: false },
            { text: "Dumping", correct: false }
        ]
    },
    // 5
    {
        question: "What is the primary effect of global warming?",
        answers: [
            { text: "Cooling of the planet", correct: false },
            { text: "Rising sea levels", correct: true },
            { text: "Increased biodiversity", correct: false },
            { text: "More stable weather patterns", correct: false }
        ]
    },
    // 6
    {
        question: "Which of the following ecosystems is characterized by permafrost?",
        answers: [
            { text: "Tundra", correct: true },
            { text: "Savanna", correct: false },
            { text: "Desert", correct: false },
            { text: "Temperate forest", correct: false }
        ]
    },
    // 7
    {
        question: "Which of the following is a renewable energy source?",
        answers: [
            { text: "Fossil fuels", correct: false },
            { text: "Solar energy", correct: true },
            { text: "Natural gas", correct: false },
            { text: "Coal", correct: false }
        ]
    },
    // 8
    {
        question: "What is the primary benefit of biodiversity?",
        answers: [
            { text: "Increased ecosystem resilience", correct: true },
            { text: "Decreased food security", correct: false },
            { text: "Increased vulnerability to diseases", correct: false },
            { text: "Loss of genetic diversity", correct: false }
        ]
    },
    // 9
    {
        question: "What is the main cause of habitat fragmentation?",
        answers: [
            { text: "Urban development", correct: true },
            { text: "Conservation efforts", correct: false },
            { text: "Natural disasters", correct: false },
            { text: "Biodiversity", correct: false }
        ]
    },
    // 10
    {
        question: "Which of the following is an example of an ecosystem service?",
        answers: [
            { text: "Pollination of crops", correct: true },
            { text: "Mining", correct: false },
            { text: "Deforestation", correct: false },
            { text: "Urbanization", correct: false }
        ]
    },

    // Script 8
    // 1
    {
        question: "Which of the following is a characteristic of a sustainable city?",
        answers: [
            { text: "High carbon emissions", correct: false },
            { text: "Extensive green spaces", correct: true },
            { text: "Heavy reliance on fossil fuels", correct: false },
            { text: "Urban sprawl", correct: false }
        ]
    },
    // 2
    {
        question: "Which of the following is a major source of air pollution?",
        answers: [
            { text: "Wind energy", correct: false },
            { text: "Vehicle emissions", correct: true },
            { text: "Solar energy", correct: false },
            { text: "Hydropower", correct: false }
        ]
    },
    // 3
    {
        question: "What is the primary function of wetlands?",
        answers: [
            { text: "Water filtration", correct: true },
            { text: "Flood control", correct: true },
            { text: "Oxygen production", correct: false },
            { text: "Carbon storage", correct: false }
        ]
    },
    // 4
    {
        question: "Which of the following is a consequence of climate change?",
        answers: [
            { text: "Increased biodiversity", correct: false },
            { text: "More frequent natural disasters", correct: true },
            { text: "Stable weather patterns", correct: false },
            { text: "Decreased sea levels", correct: false }
        ]
    },
    // 5
    {
        question: "What is the term for the gradual transition of an ecosystem following a disturbance?",
        answers: [
            { text: "Ecological succession", correct: true },
            { text: "Population dynamics", correct: false },
            { text: "Evolution", correct: false },
            { text: "Species extinction", correct: false }
        ]
    },
    // 6
    {
        question: "Which of the following is a consequence of deforestation?",
        answers: [
            { text: "Increased biodiversity", correct: false },
            { text: "Loss of habitat", correct: true },
            { text: "Improved soil quality", correct: false },
            { text: "Increased carbon sequestration", correct: false }
        ]
    },
    // 7
    {
        question: "What is the primary purpose of environmental education?",
        answers: [
            { text: "To promote awareness and understanding of environmental issues", correct: true },
            { text: "To increase pollution", correct: false },
            { text: "To discourage conservation efforts", correct: false },
            { text: "To limit public participation", correct: false }
        ]
    },
    // 8
    {
        question: "Which of the following is a major source of water pollution?",
        answers: [
            { text: "Agricultural runoff", correct: true },
            { text: "Recycling", correct: false },
            { text: "Afforestation", correct: false },
            { text: "Waste reduction", correct: false }
        ]
    },
    // 9
    {
        question: "What is the main goal of sustainable agriculture?",
        answers: [
            { text: "To maximize short-term profits", correct: false },
            { text: "To protect natural resources for future generations", correct: true },
            { text: "To promote chemical use", correct: false },
            { text: "To increase soil degradation", correct: false }
        ]
    },
    // 10
    {
        question: "Which of the following is a consequence of plastic pollution?",
        answers: [
            { text: "Improved marine ecosystems", correct: false },
            { text: "Increased wildlife protection", correct: false },
            { text: "Harm to marine life", correct: true },
            { text: "Enhanced biodiversity", correct: false }
        ]
    },

    // Script 9
    // 1
    {
        question: "What is the primary purpose of the Paris Agreement?",
        answers: [
            { text: "To reduce global greenhouse gas emissions", correct: true },
            { text: "To promote fossil fuel usage", correct: false },
            { text: "To eliminate all forms of pollution", correct: false },
            { text: "To increase global temperatures", correct: false }
        ]
    },
    // 2
    {
        question: "Which of the following is a consequence of climate change?",
        answers: [
            { text: "Stronger hurricanes", correct: true },
            { text: "Increased biodiversity", correct: false },
            { text: "Stable weather patterns", correct: false },
            { text: "Lower sea levels", correct: false }
        ]
    },
    // 3
    {
        question: "What is the primary source of renewable energy?",
        answers: [
            { text: "Fossil fuels", correct: false },
            { text: "Wind", correct: true },
            { text: "Nuclear", correct: false },
            { text: "Natural gas", correct: false }
        ]
    },
    // 4
    {
        question: "Which of the following is a significant greenhouse gas?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Methane", correct: true },
            { text: "Helium", correct: false },
            { text: "Nitrogen", correct: false }
        ]
    },
    // 5
    {
        question: "What is the main cause of biodiversity loss?",
        answers: [
            { text: "Invasive species", correct: false },
            { text: "Habitat destruction", correct: true },
            { text: "Climate change", correct: false },
            { text: "Overfishing", correct: false }
        ]
    },
    // 6
    {
        question: "What is the term for the warming of the Earth's surface due to human activity?",
        answers: [
            { text: "Global warming", correct: true },
            { text: "Ozone depletion", correct: false },
            { text: "Acid rain", correct: false },
            { text: "Desertification", correct: false }
        ]
    },
    // 7
    {
        question: "Which of the following is a sustainable farming practice?",
        answers: [
            { text: "Monocropping", correct: false },
            { text: "Crop rotation", correct: true },
            { text: "Chemical pesticides", correct: false },
            { text: "Overgrazing", correct: false }
        ]
    },
    // 8
    {
        question: "What is the main benefit of reforestation?",
        answers: [
            { text: "Increased carbon emissions", correct: false },
            { text: "Habitat restoration", correct: true },
            { text: "Soil degradation", correct: false },
            { text: "Loss of biodiversity", correct: false }
        ]
    },
    // 9
    {
        question: "What is a major cause of soil erosion?",
        answers: [
            { text: "Deforestation", correct: true },
            { text: "Reforestation", correct: false },
            { text: "Organic farming", correct: false },
            { text: "Crop rotation", correct: false }
        ]
    },
    // 10
    {
        question: "Which of the following is an example of a carbon sink?",
        answers: [
            { text: "Ocean", correct: true },
            { text: "Plastic waste", correct: false },
            { text: "Coal", correct: false },
            { text: "Natural gas", correct: false }
        ]
    },

    // Script 10
    // 1
    {
        question: "Which of the following is NOT a consequence of climate change?",
        answers: [
            { text: "Melting glaciers", correct: false },
            { text: "Increased rainfall", correct: false },
            { text: "Stable sea levels", correct: true },
            { text: "Rising sea levels", correct: false }
        ]
    },
    // 2
    {
        question: "What is the primary cause of greenhouse gas emissions?",
        answers: [
            { text: "Agriculture", correct: false },
            { text: "Transportation", correct: false },
            { text: "Energy production", correct: true },
            { text: "Waste management", correct: false }
        ]
    },
    // 3
    {
        question: "What is the term for the process of converting waste into reusable material?",
        answers: [
            { text: "Recycling", correct: true },
            { text: "Composting", correct: false },
            { text: "Landfilling", correct: false },
            { text: "Incineration", correct: false }
        ]
    },
    // 4
    {
        question: "Which of the following is a consequence of ocean acidification?",
        answers: [
            { text: "Improved coral growth", correct: false },
            { text: "Harm to marine life", correct: true },
            { text: "Increased fish populations", correct: false },
            { text: "Enhanced water quality", correct: false }
        ]
    },
    // 5
    {
        question: "What is the main purpose of the Clean Water Act?",
        answers: [
            { text: "To regulate water quality", correct: true },
            { text: "To promote industrial waste", correct: false },
            { text: "To increase water pollution", correct: false },
            { text: "To limit public access to water bodies", correct: false }
        ]
    },
    // 6
    {
        question: "Which of the following is a consequence of plastic waste in the ocean?",
        answers: [
            { text: "Increased marine biodiversity", correct: false },
            { text: "Harm to wildlife", correct: true },
            { text: "Improved water clarity", correct: false },
            { text: "Enhanced fisheries", correct: false }
        ]
    },
    // 7
    {
        question: "What is the primary goal of the Endangered Species Act?",
        answers: [
            { text: "To increase hunting", correct: false },
            { text: "To protect endangered species", correct: true },
            { text: "To promote habitat destruction", correct: false },
            { text: "To eliminate conservation efforts", correct: false }
        ]
    },
    // 8
    {
        question: "Which of the following is a major source of greenhouse gas emissions?",
        answers: [
            { text: "Deforestation", correct: true },
            { text: "Sustainable agriculture", correct: false },
            { text: "Renewable energy", correct: false },
            { text: "Conservation", correct: false }
        ]
    },
    // 9
    {
        question: "What is the primary cause of water scarcity?",
        answers: [
            { text: "Overconsumption", correct: true },
            { text: "Conservation efforts", correct: false },
            { text: "Increased rainfall", correct: false },
            { text: "Improved irrigation techniques", correct: false }
        ]
    },
    // 10
    {
        question: "Which of the following is NOT a greenhouse gas?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Methane", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrous oxide", correct: false }
        ]
    }
];

// Shuffle Function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// Shuffle Questions and Answers
const prepareQuiz = () => {
    shuffleArray(questions);
    questions.forEach(question => {
        shuffleArray(question.answers);
    });
};

// Display Questions
const displayQuestions = () => {
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <label class="question-label">${index + 1}. ${question.question}</label>
            ${question.answers.map((answer, answerIndex) => `
                <label>
                    <input type="radio" name="question${index}" value="${answer.text}" required>
                    ${answer.text}
                </label>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
    });
};

// Handle Form Submission
const handleSubmit = (event) => {
    event.preventDefault();
    const userAnswers = Array.from(document.querySelectorAll('input[type="radio"]:checked'));
    const resultDiv = document.getElementById("result");
    const warningDiv = document.getElementById("warning");
    const submitButton = document.getElementById("submit-btn");
    const tryAgainButton = document.getElementById("try-again-btn");
    warningDiv.classList.add('hidden');

    if (userAnswers.length !== questions.length) {
        warningDiv.classList.remove('hidden');
        return;
    }

    let score = 0;

    // Clear previous result
    resultDiv.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const selectedAnswer = answer.value;
        const correctAnswer = questions[index].answers.find(ans => ans.correct).text;

        // Highlight the option the user selected
        const options = document.querySelectorAll(`input[name="question${index}"]`);
        options.forEach(option => {
            const label = option.parentElement;

            // Add classes based on correctness
            if (option.checked) {
                label.classList.add('selected'); // Highlight selected option
            }
            if (option.value === correctAnswer) {
                label.classList.add('correct'); // Highlight correct option in green
            } else if (option.value === selectedAnswer) {
                label.classList.add('wrong'); // Highlight incorrect selected option in red
            }
        });

        // Update score
        if (selectedAnswer === correctAnswer) {
            score++;
        }
    });

    // Show results
    resultDiv.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
    resultDiv.classList.remove('hidden');

    // Hide submit button and show try again button
    submitButton.classList.add('hidden');
    tryAgainButton.classList.remove('hidden');
};

// Reset Quiz
const resetQuiz = () => {
    const quizForm = document.getElementById("quiz-form");
    quizForm.reset(); // Reset the form
    prepareQuiz(); // Shuffle questions and options
    displayQuestions(); // Display the questions again
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Clear previous results
    resultDiv.classList.add('hidden'); // Hide the result section
    document.getElementById("submit-btn").classList.remove('hidden'); // Show submit button
    document.getElementById("try-again-btn").classList.add('hidden'); // Hide try again button
};

// Initialize Quiz
document.addEventListener("DOMContentLoaded", () => {
    prepareQuiz();
    displayQuestions();

    const quizForm = document.getElementById("quiz-form");
    quizForm.addEventListener("submit", handleSubmit);
    document.getElementById("try-again-btn").addEventListener("click", resetQuiz);
});
