class Api::V1::StoresController < ApplicationController
    before_action :set_store, only: [:show, :update, :destroy]

    # GET /stores
    def index
        @stores = Store.all

        render json: @stores, only: [:name, :id], include: {
            products: {
                except: [:created_at, :updated_at]
            }
        }
    end

  # GET /stores/1
  def show
    render json: @store, only: [:name, :id], include: {
        products: {
            except: [:created_at, :updated_at]
        }
    }
  end

  # POST /stores
  def create
    @store = Store.new(store_params)

    if @store.save
      render json: {
        status: 201,
        store: @store
      }, status: :created, location: api_v1_store_path(@store)
    else
      render json: {
        status: 422,
        errors: @store.errors.full_messages.join(", ")
      }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stores/1
  def update
    if @store.update(store_params)
      render json: {
        status: 204,
        store: @store
      }
    else
      render json: {
        status: 400,
        errors: @store.errors.full_messages.join(", ")
      }, status: :unprocessable_entity
    end
  end

  # DELETE /stores/1
  def destroy
    if @store.destroy
      render json: {message: "Successfully deleted", store: @store}
    else
      render json: {message: "Failed to delete"}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_store
      @store = Store.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def store_params
      params.require(:store).permit(:name)
    end
end
