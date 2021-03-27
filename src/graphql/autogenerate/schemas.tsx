export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamp: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
};

export type UserSetupInput = {
  address: Scalars["jsonb"];
  avatarUrl: Scalars["String"];
  country: Scalars["String"];
  countryCode: Scalars["String"];
  dialCode: Scalars["String"];
  displayName: Scalars["String"];
  phones: Scalars["jsonb"];
  roles: Scalars["String"];
  token: Scalars["String"];
};

export type UserSetupRes = {
  __typename?: "UserSetupRes";
  message: Scalars["String"];
  status: Scalars["String"];
  statusCode: Scalars["Int"];
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: "categories";
  /** An array relationship */
  categories_products: Array<Categories_Products>;
  /** An aggregate relationship */
  categories_products_aggregate: Categories_Products_Aggregate;
  id: Scalars["uuid"];
  name: Scalars["String"];
};

/** columns and relationships of "categories" */
export type CategoriesCategories_ProductsArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesCategories_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: "categories_aggregate";
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: "categories_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Categories_Bool_Exp>>;
  categories_products?: Maybe<Categories_Products_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  categories_products?: Maybe<Categories_Products_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: "categories_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: "categories_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: "categories_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  categories_products_aggregate?: Maybe<Categories_Products_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** columns and relationships of "categories_products" */
export type Categories_Products = {
  __typename?: "categories_products";
  /** An object relationship */
  category?: Maybe<Categories>;
  categoryId: Scalars["uuid"];
  /** An object relationship */
  product?: Maybe<Products>;
  productId: Scalars["uuid"];
};

/** aggregated selection of "categories_products" */
export type Categories_Products_Aggregate = {
  __typename?: "categories_products_aggregate";
  aggregate?: Maybe<Categories_Products_Aggregate_Fields>;
  nodes: Array<Categories_Products>;
};

/** aggregate fields of "categories_products" */
export type Categories_Products_Aggregate_Fields = {
  __typename?: "categories_products_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Categories_Products_Max_Fields>;
  min?: Maybe<Categories_Products_Min_Fields>;
};

/** aggregate fields of "categories_products" */
export type Categories_Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Products_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "categories_products" */
export type Categories_Products_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Categories_Products_Max_Order_By>;
  min?: Maybe<Categories_Products_Min_Order_By>;
};

/** input type for inserting array relation for remote table "categories_products" */
export type Categories_Products_Arr_Rel_Insert_Input = {
  data: Array<Categories_Products_Insert_Input>;
};

/** Boolean expression to filter rows from the table "categories_products". All fields are combined with a logical 'AND'. */
export type Categories_Products_Bool_Exp = {
  _and?: Maybe<Array<Categories_Products_Bool_Exp>>;
  _not?: Maybe<Categories_Products_Bool_Exp>;
  _or?: Maybe<Array<Categories_Products_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  categoryId?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  productId?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "categories_products" */
export type Categories_Products_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars["uuid"]>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  productId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Categories_Products_Max_Fields = {
  __typename?: "categories_products_max_fields";
  categoryId?: Maybe<Scalars["uuid"]>;
  productId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "categories_products" */
export type Categories_Products_Max_Order_By = {
  categoryId?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Products_Min_Fields = {
  __typename?: "categories_products_min_fields";
  categoryId?: Maybe<Scalars["uuid"]>;
  productId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "categories_products" */
export type Categories_Products_Min_Order_By = {
  categoryId?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
};

/** response of any mutation on the table "categories_products" */
export type Categories_Products_Mutation_Response = {
  __typename?: "categories_products_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Categories_Products>;
};

/** Ordering options when selecting data from "categories_products". */
export type Categories_Products_Order_By = {
  category?: Maybe<Categories_Order_By>;
  categoryId?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  productId?: Maybe<Order_By>;
};

/** select columns of table "categories_products" */
export enum Categories_Products_Select_Column {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  ProductId = "productId",
}

/** input type for updating data in table "categories_products" */
export type Categories_Products_Set_Input = {
  categoryId?: Maybe<Scalars["uuid"]>;
  productId?: Maybe<Scalars["uuid"]>;
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars["jsonb"]>;
  _eq?: Maybe<Scalars["jsonb"]>;
  _gt?: Maybe<Scalars["jsonb"]>;
  _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars["String"]>>;
  _in?: Maybe<Array<Scalars["jsonb"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["jsonb"]>;
  _lte?: Maybe<Scalars["jsonb"]>;
  _neq?: Maybe<Scalars["jsonb"]>;
  _nin?: Maybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete data from the table: "categories_products" */
  delete_categories_products?: Maybe<Categories_Products_Mutation_Response>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "categories_products" */
  insert_categories_products?: Maybe<Categories_Products_Mutation_Response>;
  /** insert a single row into the table: "categories_products" */
  insert_categories_products_one?: Maybe<Categories_Products>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update data of the table: "categories_products" */
  update_categories_products?: Maybe<Categories_Products_Mutation_Response>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  userSetup?: Maybe<UserSetupRes>;
};

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Categories_ProductsArgs = {
  where: Categories_Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Categories_ProductsArgs = {
  objects: Array<Categories_Products_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Categories_Products_OneArgs = {
  object: Categories_Products_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Categories_ProductsArgs = {
  _set?: Maybe<Categories_Products_Set_Input>;
  where: Categories_Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUserSetupArgs = {
  input: UserSetupInput;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: "products";
  URLImage?: Maybe<Scalars["String"]>;
  /** An array relationship */
  categories_products: Array<Categories_Products>;
  /** An aggregate relationship */
  categories_products_aggregate: Categories_Products_Aggregate;
  createdAt: Scalars["timestamp"];
  id: Scalars["uuid"];
  name: Scalars["String"];
  pricing: Scalars["Int"];
  saleOff: Scalars["Int"];
  updated_at?: Maybe<Scalars["timestamp"]>;
};

/** columns and relationships of "products" */
export type ProductsCategories_ProductsArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsCategories_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: "products_aggregate";
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: "products_aggregate_fields";
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: "products_avg_fields";
  pricing?: Maybe<Scalars["Float"]>;
  saleOff?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  URLImage?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  categories_products?: Maybe<Categories_Products_Bool_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  pricing?: Maybe<Int_Comparison_Exp>;
  saleOff?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  pricing?: Maybe<Scalars["Int"]>;
  saleOff?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  URLImage?: Maybe<Scalars["String"]>;
  categories_products?: Maybe<Categories_Products_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  pricing?: Maybe<Scalars["Int"]>;
  saleOff?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: "products_max_fields";
  URLImage?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  pricing?: Maybe<Scalars["Int"]>;
  saleOff?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: "products_min_fields";
  URLImage?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  pricing?: Maybe<Scalars["Int"]>;
  saleOff?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: "products_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  URLImage?: Maybe<Order_By>;
  categories_products_aggregate?: Maybe<Categories_Products_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  pricing?: Maybe<Order_By>;
  saleOff?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  UrlImage = "URLImage",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Pricing = "pricing",
  /** column name */
  SaleOff = "saleOff",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  URLImage?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  pricing?: Maybe<Scalars["Int"]>;
  saleOff?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: "products_stddev_fields";
  pricing?: Maybe<Scalars["Float"]>;
  saleOff?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: "products_stddev_pop_fields";
  pricing?: Maybe<Scalars["Float"]>;
  saleOff?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: "products_stddev_samp_fields";
  pricing?: Maybe<Scalars["Float"]>;
  saleOff?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: "products_sum_fields";
  pricing?: Maybe<Scalars["Int"]>;
  saleOff?: Maybe<Scalars["Int"]>;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: "products_var_pop_fields";
  pricing?: Maybe<Scalars["Float"]>;
  saleOff?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: "products_var_samp_fields";
  pricing?: Maybe<Scalars["Float"]>;
  saleOff?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: "products_variance_fields";
  pricing?: Maybe<Scalars["Float"]>;
  saleOff?: Maybe<Scalars["Float"]>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** An array relationship */
  categories_products: Array<Categories_Products>;
  /** An aggregate relationship */
  categories_products_aggregate: Categories_Products_Aggregate;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};

export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_ProductsArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

export type Query_RootCategories_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** An array relationship */
  categories_products: Array<Categories_Products>;
  /** An aggregate relationship */
  categories_products_aggregate: Categories_Products_Aggregate;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};

export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_ProductsArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

export type Subscription_RootCategories_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Products_Order_By>>;
  where?: Maybe<Categories_Products_Bool_Exp>;
};

export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamp"]>;
  _gt?: Maybe<Scalars["timestamp"]>;
  _gte?: Maybe<Scalars["timestamp"]>;
  _in?: Maybe<Array<Scalars["timestamp"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamp"]>;
  _lte?: Maybe<Scalars["timestamp"]>;
  _neq?: Maybe<Scalars["timestamp"]>;
  _nin?: Maybe<Array<Scalars["timestamp"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  address?: Maybe<Scalars["jsonb"]>;
  avatarUrl?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  createdAt: Scalars["timestamp"];
  dateOfBirth?: Maybe<Scalars["timestamp"]>;
  dialCode?: Maybe<Scalars["String"]>;
  displayName: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["Boolean"]>;
  id: Scalars["uuid"];
  payment?: Maybe<Scalars["jsonb"]>;
  phones?: Maybe<Scalars["jsonb"]>;
  roles: Scalars["String"];
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** columns and relationships of "users" */
export type UsersAddressArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "users" */
export type UsersPaymentArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "users" */
export type UsersPhonesArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  address?: Maybe<Scalars["jsonb"]>;
  payment?: Maybe<Scalars["jsonb"]>;
  phones?: Maybe<Scalars["jsonb"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  address?: Maybe<Jsonb_Comparison_Exp>;
  avatarUrl?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  countryCode?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  dateOfBirth?: Maybe<Timestamp_Comparison_Exp>;
  dialCode?: Maybe<String_Comparison_Exp>;
  displayName?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  payment?: Maybe<Jsonb_Comparison_Exp>;
  phones?: Maybe<Jsonb_Comparison_Exp>;
  roles?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamp_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  address?: Maybe<Array<Scalars["String"]>>;
  payment?: Maybe<Array<Scalars["String"]>>;
  phones?: Maybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  address?: Maybe<Scalars["Int"]>;
  payment?: Maybe<Scalars["Int"]>;
  phones?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  address?: Maybe<Scalars["String"]>;
  payment?: Maybe<Scalars["String"]>;
  phones?: Maybe<Scalars["String"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: Maybe<Scalars["jsonb"]>;
  avatarUrl?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  dateOfBirth?: Maybe<Scalars["timestamp"]>;
  dialCode?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["uuid"]>;
  payment?: Maybe<Scalars["jsonb"]>;
  phones?: Maybe<Scalars["jsonb"]>;
  roles?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  avatarUrl?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  dateOfBirth?: Maybe<Scalars["timestamp"]>;
  dialCode?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  roles?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  avatarUrl?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  dateOfBirth?: Maybe<Scalars["timestamp"]>;
  dialCode?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  roles?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  address?: Maybe<Order_By>;
  avatarUrl?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  countryCode?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dateOfBirth?: Maybe<Order_By>;
  dialCode?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment?: Maybe<Order_By>;
  phones?: Maybe<Order_By>;
  roles?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  address?: Maybe<Scalars["jsonb"]>;
  payment?: Maybe<Scalars["jsonb"]>;
  phones?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  AvatarUrl = "avatarUrl",
  /** column name */
  Country = "country",
  /** column name */
  CountryCode = "countryCode",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DateOfBirth = "dateOfBirth",
  /** column name */
  DialCode = "dialCode",
  /** column name */
  DisplayName = "displayName",
  /** column name */
  Email = "email",
  /** column name */
  Gender = "gender",
  /** column name */
  Id = "id",
  /** column name */
  Payment = "payment",
  /** column name */
  Phones = "phones",
  /** column name */
  Roles = "roles",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address?: Maybe<Scalars["jsonb"]>;
  avatarUrl?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  dateOfBirth?: Maybe<Scalars["timestamp"]>;
  dialCode?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["uuid"]>;
  payment?: Maybe<Scalars["jsonb"]>;
  phones?: Maybe<Scalars["jsonb"]>;
  roles?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};
