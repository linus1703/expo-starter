export interface IConfig {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

const BaseConfig: IConfig = {
  SUPABASE_URL: "http://localhost:54321",
  SUPABASE_ANON_KEY: "CHANGE_ME",
};

export default BaseConfig;
