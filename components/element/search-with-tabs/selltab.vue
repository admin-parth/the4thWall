<template>
    <div class="tab-pane fade show active" id="sell" role="tabpanel">
        <div class="row review-form gx-3">
            <div class="col-lg-4 col-md-6">
                <div class="form-group">
                    <input type="text" class="form-control" value="Search your location">
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionType :data="data" />
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionRooms :data="data" />
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionBed :data="data" />
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionBath :data="data" />
            </div>
            <div class="col-lg-4 col-md-6">
                <button type="button" class="btn btn-gradient color-4">Search</button>
            </div>
        </div>
    </div>
    <div class="tab-pane fade tab-listing" id="rent" role="tabpanel">
        <div class="row review-form gx-3">
            <div class="col-lg-4 col-md-6">
                <div class="form-group">
                    <input type="text" class="form-control" value="Search your location">
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionType :data="data" />
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionRooms :data="data" />
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionBed :data="data" />
            </div>
            <div class="col-lg-4 col-sm-6">
                <ElementFilteroptionBath :data="data" />
            </div>
            <div class="col-lg-4 col-md-6">
                <button type="button" class="btn btn-gradient color-4">Search</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useFiltersStore } from '~/store/filter'

const data = useFiltersStore().data
</script>

<style lang="scss" scoped></style>