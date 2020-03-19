import pandas as pd
import numpy as np 

covd_dataset = pd.read_csv("../data/covid_19_data.csv")

# Printing data features
print("--- FEATURES ---")

df_columns = covd_dataset.columns
features = []
for c in df_columns:
    print(c)
    features.append(c)

# Printing data head
print("\n--- DATA HEAD ---")
print(covd_dataset.head())

# Printing data description
print("\n--- DATA DESCRIPTION ---")
print(covd_dataset.describe(), "\n")


