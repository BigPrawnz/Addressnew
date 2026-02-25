// =============================================
// Real Street Names by City - real-streets.js
// These are actual street names found in each city
// =============================================

const REAL_STREETS = {
    // ===== Tax-Free States =====
    AK: {
        Anchorage: ['W Northern Lights Blvd', 'E 5th Ave', 'Spenard Rd', 'Lake Otis Pkwy', 'Minnesota Dr', 'C St', 'Debarr Rd', 'Muldoon Rd', 'Tudor Rd', 'Benson Blvd', 'A St', 'Fireweed Ln', 'Arctic Blvd', 'Seward Hwy', 'International Airport Rd', 'Dimond Blvd', 'Old Seward Hwy'],
        Fairbanks: ['College Rd', 'Airport Way', 'Cushman St', 'Noble St', 'Geist Rd', 'University Ave', 'Cowles St', 'Lacey St', 'Minnie St', 'Barnette St'],
        Juneau: ['Glacier Hwy', 'Egan Dr', 'Douglas Hwy', 'Main St', 'S Franklin St', 'Willoughby Ave'],
        _default: ['Main St', '1st Ave', '2nd Ave', '3rd Ave', 'Spruce St', 'Birch St', 'Pine St']
    },
    DE: {
        Wilmington: ['Market St', 'King St', 'Delaware Ave', 'Pennsylvania Ave', 'N Union St', 'Washington St', 'W 4th St', 'Concord Pike', 'Brandywine Blvd', 'Lancaster Ave', 'N Market St', 'Lovering Ave', 'Baynard Blvd', 'W 9th St', 'N Broom St', 'Shipley St'],
        Dover: ['S State St', 'Loockerman St', 'N State St', 'S Governors Ave', 'Bay Rd', 'S DuPont Hwy', 'N DuPont Hwy', 'Walker Rd', 'E Division St', 'White Oak Rd'],
        Newark: ['Main St', 'Elkton Rd', 'S College Ave', 'E Delaware Ave', 'Paper Mill Rd', 'Capitol Trail', 'Ogletown Rd'],
        _default: ['Main St', 'Market St', 'State St', 'Church St', 'Broad St', 'High St', 'Water St']
    },
    MT: {
        Billings: ['Grand Ave', 'Broadwater Ave', 'Central Ave', 'King Ave W', 'Rimrock Rd', 'Main St', '1st Ave N', 'Montana Ave', 'Monad Rd', 'Rehberg Ln'],
        Missoula: ['Brooks St', 'Higgins Ave', 'S Reserve St', 'W Broadway St', 'N Higgins Ave', 'Russell St', 'E Broadway', '3rd St'],
        _default: ['Main St', '1st Ave', 'Central Ave', 'Broadway', 'Custer Ave', 'Last Chance Gulch']
    },
    NH: {
        Manchester: ['Elm St', 'S Main St', 'Lake Ave', 'Mammoth Rd', 'Hanover St', 'Bridge St', 'Union St', 'Mast Rd', 'Candia Rd', 'Valley St', 'Wilson St', 'Maple St'],
        Nashua: ['Main St', 'Amherst St', 'Daniel Webster Hwy', 'Broad St', 'E Hollis St', 'W Hollis St', 'Temple St', 'Factory St'],
        Concord: ['N Main St', 'S Main St', 'Loudon Rd', 'N State St', 'S State St', 'Pleasant St', 'Warren St'],
        _default: ['Main St', 'Elm St', 'Pleasant St', 'Central St', 'School St', 'Bridge St', 'High St']
    },
    OR: {
        Portland: ['SE Hawthorne Blvd', 'NW 23rd Ave', 'N Mississippi Ave', 'SW Broadway', 'SE Division St', 'NE Alberta St', 'SE Belmont St', 'NW Burnside Rd', 'SE Powell Blvd', 'NE Sandy Blvd', 'SW Barbur Blvd', 'NE Broadway', 'SW Macadam Ave', 'SE Foster Rd', 'N Williams Ave', 'NE Glisan St', 'SW 4th Ave', 'NE MLK Jr Blvd'],
        Salem: ['Lancaster Dr NE', 'Commercial St SE', 'Liberty Rd S', 'State St', 'Center St NE', 'Market St NE', 'Silverton Rd NE', 'Mission St SE'],
        Eugene: ['Willamette St', 'E Broadway', 'W 11th Ave', 'Coburg Rd', 'River Rd', 'W 7th Ave', 'High St', 'Pearl St'],
        _default: ['Main St', 'Broadway', 'Commercial St', 'Pacific Hwy', 'State St', '3rd St', '1st Ave']
    },
    // ===== Other States =====
    AL: {
        Birmingham: ['2nd Ave N', '20th St S', 'Richard Arrington Jr Blvd', '5th Ave S', 'University Blvd', 'Lakeshore Dr', 'Montclair Rd', 'Green Springs Hwy'],
        Montgomery: ['Dexter Ave', 'Perry St', 'S Court St', 'Bell St', 'Atlanta Hwy', 'Eastern Blvd', 'Fairview Ave'],
        _default: ['Main St', '1st Ave', 'Church St', 'Broad St', 'Commerce St', 'Washington Ave']
    },
    AZ: {
        Phoenix: ['E Camelback Rd', 'N Central Ave', 'W Indian School Rd', 'E McDowell Rd', 'N 7th St', 'W Thomas Rd', 'S 7th Ave', 'E Van Buren St', 'N 16th St', 'W Bethany Home Rd', 'E Cactus Rd', 'N 35th Ave', 'W Northern Ave', 'E Baseline Rd'],
        Tucson: ['E Broadway Blvd', 'N Oracle Rd', 'E Speedway Blvd', 'S 6th Ave', 'E 22nd St', 'N Stone Ave', 'E Grant Rd', 'S Park Ave', 'W Congress St', 'N Campbell Ave'],
        Scottsdale: ['N Scottsdale Rd', 'E Shea Blvd', 'E Camelback Rd', 'E Indian School Rd', 'N Hayden Rd'],
        _default: ['Main St', '1st Ave', 'Grand Ave', 'Central Ave', 'Apache Blvd', 'Baseline Rd']
    },
    AR: {
        'Little Rock': ['W Markham St', 'Main St', 'W Capitol Ave', 'S Broadway St', 'Cantrell Rd', 'Kavanaugh Blvd', 'Rodney Parham Rd'],
        _default: ['Main St', '1st St', 'Central Ave', 'Walnut St', 'Oak St', 'Church St']
    },
    CA: {
        'Los Angeles': ['Wilshire Blvd', 'Sunset Blvd', 'Hollywood Blvd', 'Santa Monica Blvd', 'W Olympic Blvd', 'S Figueroa St', 'S Grand Ave', 'S Broadway', 'W 3rd St', 'N Highland Ave', 'Vine St', 'La Brea Ave', 'Vermont Ave', 'Western Ave', 'Melrose Ave', 'Beverly Blvd', 'W Pico Blvd', 'S La Cienega Blvd', 'Ventura Blvd', 'W Adams Blvd'],
        'San Francisco': ['Market St', 'Mission St', 'Geary Blvd', 'Van Ness Ave', 'Lombard St', 'Columbus Ave', 'Divisadero St', 'Fillmore St', 'Haight St', 'Valencia St', 'Polk St', 'Bush St', 'Sutter St', 'Pine St', 'Post St', 'California St', 'Sacramento St', 'Clay St', 'Washington St', 'Broadway'],
        'San Diego': ['University Ave', 'El Cajon Blvd', 'Broadway', 'Market St', 'Harbor Dr', 'India St', 'Pacific Hwy', '5th Ave', 'B St', 'C St', 'Garnet Ave', 'Grand Ave', 'Midway Dr', 'Rosecrans St'],
        'San Jose': ['S 1st St', 'E Santa Clara St', 'The Alameda', 'Stevens Creek Blvd', 'N Capitol Ave', 'Alum Rock Ave', 'W San Carlos St', 'Story Rd', 'Monterey Rd', 'Bascom Ave', 'Blossom Hill Rd'],
        Sacramento: ['J St', 'K St', 'L St', 'Capitol Mall', 'Folsom Blvd', 'Broadway', 'Alhambra Blvd', 'Freeport Blvd', 'Florin Rd', 'Stockton Blvd', 'Franklin Blvd'],
        Oakland: ['Telegraph Ave', 'Broadway', 'International Blvd', 'MacArthur Blvd', 'Grand Ave', 'Lakeshore Ave', 'Piedmont Ave', 'College Ave', 'San Pablo Ave', 'Foothill Blvd'],
        _default: ['Main St', 'Broadway', 'Oak St', 'Elm St', '1st St', '2nd St', '3rd St', 'Mission Blvd', 'Pacific Ave']
    },
    CO: {
        Denver: ['E Colfax Ave', 'S Broadway', 'W 38th Ave', 'Federal Blvd', 'Colorado Blvd', 'E 6th Ave', 'S University Blvd', 'W Alameda Ave', 'N Speer Blvd', 'Downing St', 'York St', 'Tennyson St', 'Welton St', 'Larimer St', 'Blake St'],
        'Colorado Springs': ['E Platte Ave', 'N Nevada Ave', 'S Academy Blvd', 'W Colorado Ave', 'Tejon St', 'N Academy Blvd', 'Austin Bluffs Pkwy'],
        _default: ['Main St', '1st Ave', 'Pearl St', 'Canyon Blvd', 'Broadway', 'Arapahoe Rd']
    },
    CT: {
        Bridgeport: ['Main St', 'State St', 'Fairfield Ave', 'Park Ave', 'Broad St', 'Capitol Ave', 'North Ave'],
        'New Haven': ['Chapel St', 'Elm St', 'Church St', 'Whitney Ave', 'Whalley Ave', 'Dixwell Ave', 'Grand Ave', 'State St'],
        Hartford: ['Main St', 'Asylum St', 'Capitol Ave', 'Farmington Ave', 'Albany Ave', 'Park St', 'Broad St'],
        _default: ['Main St', 'Broad St', 'Church St', 'High St', 'State St', 'Center St']
    },
    FL: {
        Miami: ['Biscayne Blvd', 'SW 8th St', 'NW 7th Ave', 'Coral Way', 'S Dixie Hwy', 'NE 2nd Ave', 'Collins Ave', 'Ocean Dr', 'Washington Ave', 'Flagler St', 'NW 36th St', 'NE 1st Ave', 'W Flagler St', 'SW 27th Ave'],
        Orlando: ['International Dr', 'W Colonial Dr', 'E Colonial Dr', 'S Orange Ave', 'N Orange Ave', 'E Pine St', 'W Church St', 'N Mills Ave', 'Edgewater Dr', 'Lee Rd', 'S Semoran Blvd', 'W Sand Lake Rd'],
        Tampa: ['W Kennedy Blvd', 'N Dale Mabry Hwy', 'Bayshore Blvd', 'E Hillsborough Ave', 'W Gandy Blvd', 'S Howard Ave', 'N Florida Ave', 'E Fowler Ave', 'S Dale Mabry Hwy', 'W Columbus Dr'],
        Jacksonville: ['Beach Blvd', 'Atlantic Blvd', 'Blanding Blvd', 'University Blvd N', 'San Jose Blvd', 'Arlington Expwy', 'Hendricks Ave', 'Park St'],
        _default: ['Main St', '1st Ave', 'Ocean Blvd', 'Palm Ave', 'Bay St', 'Gulf Blvd', 'Sunrise Blvd']
    },
    GA: {
        Atlanta: ['Peachtree St NE', 'North Ave NW', 'Ponce de Leon Ave', 'W Peachtree St', 'Spring St NW', 'Piedmont Ave NE', 'Martin Luther King Jr Dr', 'Edgewood Ave', 'Marietta St NW', 'Auburn Ave NE', 'Ralph David Abernathy Blvd', 'Dekalb Ave', 'Moreland Ave NE', 'Northside Dr NW'],
        Savannah: ['Bull St', 'Drayton St', 'Abercorn St', 'Broughton St', 'Bay St', 'Congress St', 'Liberty St', 'E Broad St'],
        _default: ['Main St', 'Peachtree Rd', 'Broad St', '1st Ave', 'Church St', 'Maple Ave']
    },
    HI: {
        Honolulu: ['Kalakaua Ave', 'Kapiolani Blvd', 'King St', 'Beretania St', 'Ala Moana Blvd', 'Keeaumoku St', 'University Ave', 'Dillingham Blvd', 'Nuuanu Ave', 'Vineyard Blvd', 'Pensacola St'],
        _default: ['Kamehameha Hwy', 'Kailua Rd', 'Kuulei Rd', 'Aulike St', 'Hamakua Dr']
    },
    ID: {
        Boise: ['W State St', 'N Capitol Blvd', 'W Main St', 'S 8th St', 'W Idaho St', 'Vista Ave', 'S Federal Way', 'W Overland Rd', 'N Cole Rd', 'W Fairview Ave'],
        _default: ['Main St', '1st St', 'Idaho St', 'Arthur St', 'Center St', 'Lincoln Rd']
    },
    IL: {
        Chicago: ['N Michigan Ave', 'S State St', 'W Madison St', 'N Clark St', 'N LaSalle St', 'W Lake St', 'S Wabash Ave', 'N Dearborn St', 'W Roosevelt Rd', 'N Milwaukee Ave', 'W Division St', 'S Halsted St', 'W Belmont Ave', 'N Broadway', 'W Fullerton Ave', 'N Western Ave', 'W North Ave', 'S Ashland Ave', 'W 63rd St', 'N Lincoln Ave', 'W Irving Park Rd'],
        _default: ['Main St', 'State St', '1st Ave', 'Broadway', 'Springfield Ave', 'Washington St']
    },
    IN: {
        Indianapolis: ['N Meridian St', 'E Washington St', 'Massachusetts Ave', 'N Illinois St', 'W 16th St', 'N Pennsylvania St', 'E Market St', 'S East St', 'N Capitol Ave', 'Virginia Ave', 'N College Ave', 'W 38th St'],
        _default: ['Main St', '1st St', 'Washington St', 'Meridian St', 'Market St', 'State St']
    },
    IA: {
        'Des Moines': ['Grand Ave', 'Locust St', 'University Ave', 'Ingersoll Ave', 'E Court Ave', 'Fleur Dr', 'SE 14th St', 'Douglas Ave', 'Euclid Ave', 'Merle Hay Rd'],
        _default: ['Main St', '1st Ave', '2nd Ave', 'Burlington St', 'Iowa Ave', 'Market St']
    },
    KS: {
        Wichita: ['E Douglas Ave', 'N Broadway St', 'S Seneca St', 'E Kellogg Dr', 'N Rock Rd', 'W Maple St', 'S Hydraulic Ave', 'E 13th St N', 'N Woodlawn Blvd'],
        _default: ['Main St', '1st St', 'Kansas Ave', 'Mass St', 'Commercial St']
    },
    KY: {
        Louisville: ['Bardstown Rd', 'Frankfort Ave', 'E Broadway', 'S 4th St', 'W Main St', 'S Preston St', 'Dixie Hwy', 'Shelbyville Rd', 'Brownsboro Rd', 'W Market St', 'Baxter Ave'],
        _default: ['Main St', 'Broadway', 'Limestone', 'Maxwell St', 'High St', 'Short St']
    },
    LA: {
        'New Orleans': ['Canal St', 'Magazine St', 'Bourbon St', 'Royal St', 'Decatur St', 'St Charles Ave', 'Tchoupitoulas St', 'Esplanade Ave', 'Frenchmen St', 'Chartres St', 'S Claiborne Ave', 'Carrollton Ave', 'Poydras St', 'Baronne St'],
        _default: ['Main St', '1st St', 'Broad St', 'Jefferson Hwy', 'Veterans Memorial Blvd']
    },
    ME: {
        Portland: ['Congress St', 'Commercial St', 'Forest Ave', 'Brighton Ave', 'Fore St', 'Exchange St', 'Free St'],
        _default: ['Main St', 'Center St', 'High St', 'Water St', 'Pleasant St']
    },
    MD: {
        Baltimore: ['N Charles St', 'E Pratt St', 'Light St', 'E Baltimore St', 'N Howard St', 'W Fayette St', 'E Lombard St', 'Cathedral St', 'St Paul St', 'Calvert St', 'S Broadway', 'Thames St', 'Eastern Ave'],
        _default: ['Main St', 'Church St', 'Frederick Rd', 'Annapolis Rd', 'Georgia Ave']
    },
    MA: {
        Boston: ['Boylston St', 'Tremont St', 'Washington St', 'Newbury St', 'Commonwealth Ave', 'Beacon St', 'Cambridge St', 'Congress St', 'Atlantic Ave', 'Hanover St', 'Charles St', 'Huntington Ave', 'Dorchester Ave', 'Mass Ave', 'Blue Hill Ave'],
        Cambridge: ['Massachusetts Ave', 'Broadway', 'Main St', 'Hampshire St', 'Cambridge St', 'Mt Auburn St', 'Brattle St'],
        _default: ['Main St', 'Elm St', 'Pleasant St', 'Summer St', 'School St', 'High St']
    },
    MI: {
        Detroit: ['Woodward Ave', 'Michigan Ave', 'Grand River Ave', 'Gratiot Ave', 'Livernois Ave', 'W Vernor Hwy', 'E Jefferson Ave', 'Fort St', 'Cass Ave', '2nd Ave', 'Rosa Parks Blvd', 'W Warren Ave', 'E Warren Ave'],
        _default: ['Main St', 'Michigan Ave', 'State St', '1st St', 'Maple Rd', 'Telegraph Rd']
    },
    MN: {
        Minneapolis: ['Hennepin Ave', 'Nicollet Mall', 'S Washington Ave', 'Lake St', 'Lyndale Ave S', 'University Ave SE', 'E Franklin Ave', 'Cedar Ave S', 'W Broadway Ave', 'Lowry Ave N', 'Central Ave NE', 'Nicollet Ave S'],
        'St. Paul': ['Grand Ave', 'University Ave W', 'W 7th St', 'Robert St', 'Selby Ave', 'Snelling Ave', 'Summit Ave', 'Rice St', 'Wabasha St'],
        _default: ['Main St', '1st Ave', 'Broadway', 'Central Ave', 'Oak St', 'Elm St']
    },
    MS: {
        Jackson: ['N State St', 'Capitol St', 'W Capitol St', 'N Farish St', 'Raymond Rd', 'Terry Rd', 'Woodrow Wilson Ave', 'Northside Dr', 'Robinson Rd'],
        _default: ['Main St', '1st Ave', 'Church St', 'Market St', 'Broad St']
    },
    MO: {
        'Kansas City': ['Main St', 'Grand Blvd', 'Broadway Blvd', 'Westport Rd', 'Ward Pkwy', 'E 31st St', 'Troost Ave', 'Prospect Ave', 'SW Blvd', 'Wornall Rd', 'E 39th St', 'Country Club Plaza'],
        'St. Louis': ['Washington Ave', 'Olive St', 'Market St', 'Delmar Blvd', 'S Grand Blvd', 'Gravois Ave', 'Natural Bridge Ave', 'S Jefferson Ave', 'N Broadway', 'Hampton Ave', 'Arsenal St'],
        _default: ['Main St', 'Broadway', 'Market St', '1st St', 'Elm St', 'Walnut St']
    },
    NE: {
        Omaha: ['Dodge St', 'Farnam St', 'Leavenworth St', 'S 72nd St', 'N 30th St', 'Center St', 'L St', 'Pacific St', 'Saddle Creek Rd', 'Harney St', 'S 24th St'],
        Lincoln: ['O St', 'Vine St', 'South St', 'Cornhusker Hwy', 'N 27th St', 'N 48th St', 'A St', 'Pioneers Blvd'],
        _default: ['Main St', '1st Ave', 'Central Ave', 'Grand Ave']
    },
    NV: {
        'Las Vegas': ['Las Vegas Blvd S', 'Fremont St', 'E Sahara Ave', 'W Charleston Blvd', 'S Maryland Pkwy', 'E Flamingo Rd', 'W Tropicana Ave', 'S Eastern Ave', 'S Rainbow Blvd', 'E Desert Inn Rd', 'W Spring Mountain Rd', 'N Decatur Blvd', 'W Lake Mead Blvd', 'S Durango Dr', 'E Bonanza Rd'],
        Reno: ['S Virginia St', 'N Virginia St', 'W 4th St', 'E 2nd St', 'S Wells Ave', 'W Moana Ln', 'S McCarran Blvd', 'Plumb Ln', 'Keystone Ave'],
        _default: ['Main St', '1st St', 'Virginia St', 'Mill St', 'Center St']
    },
    NJ: {
        Newark: ['Broad St', 'Market St', 'Raymond Blvd', 'McCarter Hwy', 'Ferry St', 'Springfield Ave', 'Clinton Ave', 'Halsey St', 'Frelinghuysen Ave'],
        'Jersey City': ['Newark Ave', 'Central Ave', 'W Side Ave', 'JFK Blvd', 'Marin Blvd', 'Jersey Ave', 'Grand St', 'Montgomery St'],
        _default: ['Main St', 'Broad St', 'High St', 'Church St', 'State St', 'Central Ave']
    },
    NM: {
        Albuquerque: ['Central Ave NE', 'Menaul Blvd NE', 'Lomas Blvd NE', 'San Mateo Blvd NE', 'Louisiana Blvd NE', 'Montgomery Blvd NE', 'Coors Blvd NW', 'Paseo Del Norte NE', 'Gibson Blvd SE', 'Juan Tabo Blvd NE'],
        'Santa Fe': ['Cerrillos Rd', 'St Francis Dr', 'W San Francisco St', 'E Palace Ave', 'Canyon Rd', 'Old Santa Fe Trail', 'Paseo de Peralta'],
        _default: ['Main St', '1st St', 'Central Ave', 'Rio Grande Blvd']
    },
    NY: {
        'New York': ['Broadway', '5th Ave', 'Park Ave', 'Madison Ave', 'Lexington Ave', '3rd Ave', '2nd Ave', '1st Ave', 'W 42nd St', 'E 34th St', 'W 23rd St', 'E 14th St', 'Houston St', 'Canal St', 'Bowery', 'W 72nd St', 'Amsterdam Ave', 'Columbus Ave', 'W 125th St', 'Bleecker St', 'Sullivan St', 'W 4th St', 'E 23rd St', 'W 57th St', 'E Houston St'],
        Brooklyn: ['Flatbush Ave', 'Atlantic Ave', 'Bedford Ave', 'Nostrand Ave', '5th Ave', '7th Ave', 'Graham Ave', 'Myrtle Ave', 'DeKalb Ave', 'Court St', 'Smith St', '4th Ave', 'Metropolitan Ave'],
        Buffalo: ['Main St', 'Delaware Ave', 'Elmwood Ave', 'Hertel Ave', 'Niagara St', 'Broadway', 'W Chippewa St', 'Allen St', 'Grant St'],
        _default: ['Main St', 'Broadway', 'State St', 'Elm St', 'Oak St', 'Genesee St']
    },
    NC: {
        Charlotte: ['N Tryon St', 'S Boulevard', 'E Trade St', 'S Church St', 'E Independence Blvd', 'Freedom Dr', 'Central Ave', 'N Davidson St', 'W Morehead St', 'Providence Rd', 'Park Rd', 'Beatties Ford Rd', 'S Mint St'],
        Raleigh: ['Fayetteville St', 'Hillsborough St', 'Glenwood Ave', 'Capital Blvd', 'New Bern Ave', 'S Saunders St', 'Wake Forest Rd', 'Western Blvd', 'Six Forks Rd',],
        _default: ['Main St', 'Broad St', 'Elm St', 'Trade St', '1st Ave', 'Church St']
    },
    ND: {
        Fargo: ['Broadway N', '13th Ave S', 'University Dr S', 'S University Dr', 'Main Ave', '25th St S', '45th St S', '32nd Ave S'],
        _default: ['Main Ave', 'Broadway', '1st Ave', '3rd St', 'Rosser Ave', 'State St']
    },
    OH: {
        Columbus: ['N High St', 'Broad St', 'E Main St', 'S High St', 'W Spring St', 'Neil Ave', 'E Gay St', 'Cleveland Ave', 'Parsons Ave', 'Sullivant Ave', 'W Broad St', 'Indianola Ave'],
        Cleveland: ['Euclid Ave', 'E 9th St', 'W 25th St', 'Superior Ave', 'Detroit Ave', 'St Clair Ave', 'Lorain Ave', 'Pearl Rd', 'Broadway Ave', 'Carnegie Ave'],
        Cincinnati: ['Vine St', 'Main St', 'Reading Rd', 'Central Ave', 'W 5th St', 'W 6th St', 'Race St', 'Elm St', 'Court St', 'Calhoun St', 'Short Vine'],
        _default: ['Main St', 'Broad St', 'High St', 'State St', 'Market St', '1st Ave']
    },
    OK: {
        'Oklahoma City': ['N Western Ave', 'NW 23rd St', 'N Classen Blvd', 'N May Ave', 'S Penn Ave', 'NW 39th St', 'NE 23rd St', 'SW 29th St', 'N Lincoln Blvd', 'N Broadway Ave', 'Reno Ave', 'NW Expressway'],
        Tulsa: ['S Peoria Ave', 'E 15th St', 'S Harvard Ave', 'E 11th St', 'S Lewis Ave', 'E 21st St', 'S Sheridan Rd', 'E 31st St', 'Riverside Dr', 'S Memorial Dr'],
        _default: ['Main St', 'Broadway', '1st St', 'Grand Ave', 'Porter Ave']
    },
    PA: {
        Philadelphia: ['Broad St', 'Market St', 'Chestnut St', 'Walnut St', 'South St', 'Spring Garden St', 'Girard Ave', 'N 2nd St', 'S 4th St', 'Frankford Ave', 'N Front St', 'Race St', 'Arch St', 'N 3rd St', 'Passyunk Ave', 'Oregon Ave', 'Germantown Ave', 'Ridge Ave'],
        Pittsburgh: ['Forbes Ave', '5th Ave', 'Liberty Ave', 'Penn Ave', 'E Carson St', 'Butler St', 'Murray Ave', 'S Craig St', 'N Craig St', 'Centre Ave', 'Baum Blvd'],
        _default: ['Main St', 'Broad St', 'Market St', 'State St', 'High St', 'King St']
    },
    RI: {
        Providence: ['Westminster St', 'Atwells Ave', 'Thayer St', 'Hope St', 'Wickenden St', 'N Main St', 'S Main St', 'Elmwood Ave', 'Broad St', 'Dorrance St'],
        _default: ['Main St', 'High St', 'Thames St', 'Spring St', 'Mill St']
    },
    SC: {
        Columbia: ['Main St', 'Assembly St', 'Gervais St', 'Bull St', 'Harden St', 'Rosewood Dr', 'Devine St', 'Blossom St', 'Sumter St', 'Huger St'],
        Charleston: ['King St', 'Meeting St', 'Calhoun St', 'E Bay St', 'Market St', 'Broad St', 'Church St', 'Queen St', 'Tradd St', 'Wentworth St'],
        _default: ['Main St', 'Broad St', 'Church St', 'King St', 'Market St']
    },
    SD: {
        'Sioux Falls': ['S Minnesota Ave', 'W 41st St', 'S Louise Ave', 'E 10th St', 'N Cliff Ave', 'W 12th St', 'S Western Ave', 'N Minnesota Ave'],
        _default: ['Main St', '1st Ave', 'St Joseph St', 'Kansas City St', 'Mt Rushmore Rd']
    },
    TN: {
        Nashville: ['Broadway', '2nd Ave N', 'Church St', 'W End Ave', 'Gallatin Pike', 'Nolensville Pike', 'Charlotte Pike', 'Murfreesboro Pike', '8th Ave S', 'Division St', 'Dickerson Pike', '21st Ave S', 'Belmont Blvd'],
        Memphis: ['Beale St', 'Union Ave', 'Poplar Ave', 'Madison Ave', 'S Main St', 'Lamar Ave', 'Summer Ave', 'Elvis Presley Blvd', 'Park Ave', 'Central Ave', 'Cooper St', 'Overton Crossing'],
        _default: ['Main St', '1st Ave', 'Broadway', 'Church St', 'Market St', 'State St']
    },
    TX: {
        Houston: ['Westheimer Rd', 'Richmond Ave', 'Washington Ave', 'Main St', 'Kirby Dr', 'Montrose Blvd', 'Shepherd Dr', 'Heights Blvd', 'Navigation Blvd', 'Harrisburg Blvd', 'Memorial Dr', 'Post Oak Blvd', 'San Felipe St', 'Bissonnet St', 'Bellaire Blvd', 'W Alabama St', 'S Braeswood Blvd'],
        Dallas: ['Main St', 'Elm St', 'Commerce St', 'McKinney Ave', 'S Lamar St', 'N Central Expy', 'Greenville Ave', 'Gaston Ave', 'Oak Lawn Ave', 'Maple Ave', 'Cedar Springs Rd', 'Ross Ave', 'Live Oak St', 'Inwood Rd', 'Mockingbird Ln'],
        'San Antonio': ['Broadway St', 'S Alamo St', 'Commerce St', 'Market St', 'N St Marys St', 'Houston St', 'E Houston St', 'Flores St', 'Fredericksburg Rd', 'San Pedro Ave', 'Blanco Rd', 'McCullough Ave', 'Culebra Rd'],
        Austin: ['Congress Ave', 'S Lamar Blvd', 'E 6th St', 'Guadalupe St', 'Burnet Rd', 'S 1st St', 'Cesar Chavez St', 'N Lamar Blvd', 'E Riverside Dr', 'W 5th St', 'Red River St', 'E 7th St', 'E MLK Jr Blvd', 'Manor Rd', 'E 12th St', 'S Congress Ave'],
        _default: ['Main St', '1st St', 'Broadway', 'Commerce St', 'Houston St', 'Travis St']
    },
    UT: {
        'Salt Lake City': ['S State St', 'E 400 S', 'S Main St', 'N Temple', 'W 200 S', 'E 300 S', 'S 700 E', 'E 100 S', 'S 900 E', 'Highland Dr', 'Foothill Dr', 'W North Temple', 'E 2100 S', 'S 1300 E'],
        _default: ['Main St', 'Center St', 'State St', 'University Ave', '100 E', '200 N']
    },
    VT: {
        Burlington: ['Church St', 'Main St', 'Pine St', 'Battery St', 'College St', 'S Winooski Ave', 'N Winooski Ave', 'Pearl St', 'St Paul St'],
        _default: ['Main St', 'Church St', 'State St', 'Elm St', 'High St']
    },
    VA: {
        'Virginia Beach': ['Virginia Beach Blvd', 'Atlantic Ave', 'Pacific Ave', 'Laskin Rd', 'Independence Blvd', 'Shore Dr', 'Great Neck Rd', 'Holland Rd', 'Indian River Rd'],
        Richmond: ['W Broad St', 'E Main St', 'W Cary St', 'N Boulevard', 'Hull St', 'E Grace St', 'W Grace St', 'N Lombardy St', 'Grove Ave', 'Monument Ave', 'Chamberlayne Ave'],
        Arlington: ['Wilson Blvd', 'Clarendon Blvd', 'Columbia Pike', 'Lee Hwy', 'Washington Blvd', 'N Glebe Rd', 'S Glebe Rd', 'Fairfax Dr'],
        _default: ['Main St', 'High St', 'Broad St', 'Church St', 'Duke St', 'King St']
    },
    WA: {
        Seattle: ['Pike St', 'Pine St', '1st Ave', '2nd Ave', '3rd Ave', 'Broadway', 'E Union St', 'E Madison St', 'E Cherry St', 'Rainier Ave S', 'Aurora Ave N', '15th Ave E', 'Eastlake Ave E', 'NW Market St', 'N 45th St', 'W Mercer St', 'Stewart St', 'University Way NE', 'Westlake Ave N', 'Yesler Way', 'Dexter Ave N'],
        Spokane: ['W Sprague Ave', 'N Division St', 'S Grand Blvd', 'W Riverside Ave', 'E Sprague Ave', 'S Perry St', 'N Monroe St', 'Hamilton St'],
        Tacoma: ['Pacific Ave', 'S Tacoma Way', '6th Ave', 'N Pearl St', 'Center St', 'Commerce St', 'S M St', 'N 26th St'],
        _default: ['Main St', '1st Ave', '2nd Ave', 'Pacific Ave', 'Broadway', 'Pioneer Way']
    },
    WV: {
        Charleston: ['Capitol St', 'Quarrier St', 'Virginia St E', 'Washington St E', 'Kanawha Blvd E', 'Lee St', 'Summers St', 'Hale St'],
        _default: ['Main St', '1st Ave', 'Pike St', 'Court St', 'Church St']
    },
    WI: {
        Milwaukee: ['N Water St', 'E Wisconsin Ave', 'W Wisconsin Ave', 'N Broadway', 'S 1st St', 'N Plankinton Ave', 'W National Ave', 'S 2nd St', 'N Old World 3rd St', 'E Brady St', 'N Farwell Ave', 'E North Ave', 'S Kinnickinnic Ave', 'N Humboldt Ave'],
        Madison: ['State St', 'University Ave', 'E Washington Ave', 'W Washington Ave', 'N Park St', 'S Park St', 'Williamson St', 'Monroe St', 'Atwood Ave', 'E Johnson St', 'E Wilson St'],
        _default: ['Main St', '1st Ave', 'Wisconsin Ave', 'Water St', 'Broadway']
    },
    WY: {
        Cheyenne: ['W Lincolnway', 'Capitol Ave', 'Central Ave', 'Pioneer Ave', 'E 17th St', 'Warren Ave', 'Carey Ave'],
        _default: ['Main St', '1st St', 'Center St', 'Grand Ave', 'Sheridan Ave']
    },
    DC: {
        Washington: ['Pennsylvania Ave NW', 'K St NW', 'M St NW', 'Connecticut Ave NW', 'Wisconsin Ave NW', 'Georgia Ave NW', '14th St NW', 'U St NW', 'H St NE', 'Massachusetts Ave NW', 'New Hampshire Ave NW', 'Rhode Island Ave NW', 'Vermont Ave NW', '16th St NW', 'Columbia Rd NW', 'Adams Morgan', 'Bladensburg Rd NE', 'North Capitol St', 'Constitution Ave NW', 'Independence Ave SW', '7th St NW'],
        _default: ['Pennsylvania Ave', 'Constitution Ave', 'Independence Ave', 'K St NW']
    }
};
