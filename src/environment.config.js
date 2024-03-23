const ENV = "local";

const ENVIRONMENT_LOCAL = {
  Base_API_URL:"http://localhost:5000/api"
};

const ENVIRONMENT_DEVELOPMENT = {
  Base_API_URL: "http://localhost:5000/api"
};

const ENVIRONMENT_PRODUCTION = {
  Base_API_URL: "http://localhost:5000/api"
};

let ENVIRONMENT_VARIABLES;

if (ENV === "local") {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_LOCAL;
} else if (ENV === "development") {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_DEVELOPMENT;
} else {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_PRODUCTION;
}

export default ENVIRONMENT_VARIABLES;